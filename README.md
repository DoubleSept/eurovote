# Eurovote

[English Version of the README.md](/README_EN.md)

Votre système local de votes pour l'Eurovision.

Solution utilisant docker, node, express et sequelize pour vous permettre d'héberger localement un système de votes.

# Etapes

1. [Vérifier/Modifier le fichier liste des candidats](#Candidats)
2. [Lancer le programme](#Lancement)
3. Ouvrez votre navigateur sur l'url http://localhost:5000
4. Pour afficher les résultats allez sur la page http://localhost:5000/results et appuyez sur espace pour réveler au fur et à mesure les gagnants

# Candidats

Pour modifier la liste et l'ordre des candidats du concours, vous devez modifier le fichier **artists.js** dans le dossier **seeders**

# Lancement

## Lancement via Docker (recommandé)

1. Pour lancer le programme vous devez avoir [Docker](https://www.docker.com/get-started) et [docker-compose](https://docs.docker.com/compose/install/)
2. Lancer les dockers via docker-compose avec la commande `docker-compose up -d`

_Si vous voulez effacer la base de données (pour regénérer les artistes par exemple), effectuer la commande suivante pour supprimer les volumes et reconstruire le serveur : `docker-compose down -v; docker-compose build`_

## Lancement local

Pour le lancement local vous devez disposer d'une base de données valide et modifier le fichier **config/config.json**

1. Installer le projet avec `npm install`
2. Lancer avec `npm start`
3. Version de développement: `npm run watch`
