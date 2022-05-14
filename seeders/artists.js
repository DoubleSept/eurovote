'use strict';

// TODO
// MODIFIER LA LISTE SUIVANTE POUR CORRESPONDRE AU CANDIDAT DE L'ANNEE DANS L'ORDRE
// EDIT FOLLOWING LIST TO MATCH CURRENT YEAR ARTISTS IN CORRECT ORDER

// LISTE DES CODES PAYS DISPONIBLE ICI (en anglais) : https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// COUNTRY CODE LIST AVAILABLE HERE: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

const ARTISTS_LIST  = [
  {
    name: "We Are Domi",
    song: "Lights Off",
    country: "CZ" 
  },
  {
    name: "WRS",
    song: "Llámame",
    country: "RO" 
  },
  {
    name: "MARO",
    song: "Saudade, saudade",
    country: "PT" 
  },
  {
    name: "The Rasmus",
    song: "Jezebel",
    country: "FI" 
  },
  {
    name: "Marius Bear",
    song: "Boys Do Cry",
    country: "CH" 
  },
  {
    name: "Alvan & Ahez",
    song: "Fulenn",
    country: "FR" 
  },
  {
    name: "Subwoolfer",
    song: "Give That Wolf a Banana",
    country: "NO" 
  },
  {
    name: "Rosa Linn",
    song: "SNAP",
    country: "AM" 
  },
  {
    name: "Mahmood et Blanco",
    song: "Brividi",
    country: "IT" 
  },
  {
    name: "Chanel",
    song: "SloMo",
    country: "ES" 
  },
  {
    name: "S10",
    song: "De diepte",
    country: "NL" 
  },
  {
    name: "Kalush Orchestra",
    song: "Stefania (Стефанія)",
    country: "UA" 
  },
  {
    name: "Malik Harris",
    song: "Rockstars",
    country: "DE" 
  },
  {
    name: "Monika Liu",
    song: "Sentimental",
    country: "LT" 
  },
  {
    name: "Nadir Rüstəmli",
    song: "Fade to Black",
    country: "AZ" 
  },
  {
    name: "Jérémie Makiese",
    song: "Miss You",
    country: "BE" 
  },
  {
    name: "Amanda Tenfjord",
    song: "Die Together",
    country: "GR" 
  },
  {
    name: "Systur",
    song: "Með hækkandi sól",
    country: "IS" 
  },
  {
    name: "Zdob și Zdub et Frații Advahov",
    song: "Trenulețul",
    country: "MD" 
  },
  {
    name: "Cornelia Jakobs",
    song: "Hold Me Closer",
    country: "SE" 
  },
  {
    name: "Sheldon Riley",
    song: "Not the Same",
    country: "AU" 
  },
  {
    name: "Sam Ryder",
    song: "Spaceman",
    country: "GB" 
  },
  {
    name: "Ochman",
    song: "River",
    country: "PL" 
  },
  {
    name: "Konstrakta",
    song: "In corpore sano",
    country: "RS" 
  },
  {
    name: "Stefan",
    song: "Hope",
    country: "EE" 
  }
]

// NE PAS MODIFIER LES LIGNES SUIVANTES
// DO NOT REMOVE AFTER THIS LINE
module.exports = {
  up: async (queryInterface, Sequelize) => {
    var currentDate = new Date();
    ARTISTS_LIST.forEach((artist, order) => {
      artist.order = order+1;
      artist.createdAt = currentDate;
      artist.updatedAt = currentDate;
    });

    return queryInterface.bulkInsert('Artists', ARTISTS_LIST);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
