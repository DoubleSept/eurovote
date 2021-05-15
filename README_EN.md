# Eurovote

Local voting system for the Eurovision Song Contest.

This application is using Docker, Express and Sequelize to allow you to host a voting system locally.

# Etapes

1. [Check/Edit the list of candidates](#Candidates)
2. [Launch the application](#Launch)
3. Open your browser on this url: http://localhost:5000
4. To display the result page go to http://localhost:5000/results and press "Space" to display the score from the worst one to the best one.

# Candidats

To edit the list and order of the candidates of the contest, you have to edit the file **artists.js** if the **seeders** directory.

# Launch

## Launch with Docker (recommended)

1. Prerequisite: [Docker](https://www.docker.com/get-started) and [docker-compose](https://docs.docker.com/compose/install/)
2. Start the application with `docker-compose up -d`

_If you want to erase the database (mandatory for reloading a new artist list), execute the following command : `docker-compose down -v; docker-compose build`_

## Local launch

For a local launch you must have a valid database and edit the following file: **config/config.json**

1. Install with `npm install`
2. Run with `npm start`
3. For development you can use `npm run watch`
