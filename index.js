const bodyParser = require('body-parser')
const express = require('express')
const i18n = require('./i18n')

const countriesName = require("i18n-iso-countries");
const countriesEmojis = require("country-flag-emoji");

const app = express()
const port = process.env.PORT || 5000;

app.use(i18n);
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

// Models
const  { Artist, User, Vote } = require('./models');
const vote = require('./models/vote');
const { __ } = require('i18n');

// Main
app.get('/', function(req, res){ 
    res.render('index');
});


// Vote
app.get('/vote', async function(req, res){ 
    const name = req.query.name;
    const artists = await Artist.findAll({
        order: [['order', 'ASC']]
    });
    var lang = req.acceptsLanguages('fr', 'en');
    if( !lang) {
        lang= "en";
    }

    if(!name) {
        res.redirect('/');
    }
    else {
        console.log(`${name} is voting`)
        res.render('vote', { name, artists, lang, countriesName, countriesEmojis } );
    }
}).post('/vote', async function(req, res) {
    
    const name = req.body.name;
    const votes = req.body.votes;
    console.log(`New vote from ${name}`);

    const currentUser = await User.create({
        name
    });

    const artists = await Artist.findAll({
        order: [['order', 'ASC']]
    });

    const votePromises = votes.map((vote) => {
        return Vote.create({
            points: vote.points,
            ArtistId: vote.artistId,
            UserId: currentUser.id
        });
    });

    await Promise.all(votePromises);

    console.log(`Vote OK (${name})`);
    res.status(201).send('OK');
});

app.get('/afterVote', function(req, res){ 
    res.render('afterVote');
});


// Results
app.get('/results', async function(req, res){ 
    const artists = await Artist.findAll({
        order: [['order', 'ASC']]
    });
    const users = await User.findAll({
    });

    const votes = await Vote.findAll();
    
    const resultsDict = {}

    artists.forEach((artist) => resultsDict[artist.id] = { artistId: artist.id, totalPoints: 0, users: [] } )
    votes.forEach((v) => {
        resultsDict[v.ArtistId].totalPoints += v.points;
        resultsDict[v.ArtistId].users.push({userId: v.UserId, points: v.points});
    });

    const resultsArray = Object.values(resultsDict);
    resultsArray.sort((r1, r2) => {
        return r2.totalPoints - r1.totalPoints;
    });
    
    var lang = req.acceptsLanguages('fr', 'en');
    if( !lang) {
        lang= "en";
    }
    
    const sentenceBlock = {
        href: "/resultsPerUser",
        text: __("RESULTS_USERS")
    }

    res.render('results', { users, artists, lang, countriesName, countriesEmojis, resultsDict, resultsArray, sentenceBlock });
});

app.get('/resultsPerUser', async function(req, res){ 
    const artists = await Artist.findAll({
        order: [['order', 'ASC']]
    });

    const users = await User.findAll({
    });

    const votes = await Vote.findAll({
        order: [['points', 'DESC']]
    });
    
    const resultsDict = {}

    users.forEach((user) => resultsDict[user.id] = [] )
    votes.forEach((v) => {    
        resultsDict[v.UserId].push({artistId: v.ArtistId, points: v.points});
    });

    var lang = req.acceptsLanguages('fr', 'en');
    if( !lang) {
        lang= "en";
    }
    
    const sentenceBlock = {
        href: "/results",
        text: __("RESULTS_ARTISTS")
    }

    res.render('resultsPerUser', { users, artists, lang, countriesName, countriesEmojis, resultsDict, sentenceBlock });
});

// Error handling (404)
app.use(function(req, res, next) {
    res.status(404).render('404');
});


app.listen(port);
console.log("Server started")