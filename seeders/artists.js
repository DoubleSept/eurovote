'use strict';

// TODO
// MODIFIER LA LISTE SUIVANTE POUR CORRESPONDRE AU CANDIDAT DE L'ANNEE DANS L'ORDRE
// EDIT FOLLOWING LIST TO MATCH CURRENT YEAR ARTISTS IN CORRECT ORDER

// LISTE DES CODES PAYS DISPONIBLE ICI (en anglais) : https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// COUNTRY CODE LIST AVAILABLE HERE: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

const ARTISTS_LIST  = [
  {
    name: "Barbara Pravi",
    song: "Voilà",
    country: "FR"
  },
  {
    name: "James Newman",
    song: "Embers",
    country: "GB"
  },
  {
    name: "Blas Cantó",
    song: "Voy a quedarme",
    country: "ES"
  },
  {
    name: "Jendrik",
    song: "I Don't Feel Hate",
    country: "DE"
  },
  {
    name: "Måneskin",
    song: "Zitti e buoni",
    country: "IT"
  },
  {
    name: "Jeangu Macrooy",
    song: "Birth of a New Age",
    country: "NL"
  },
  {
    name: "Fyr & Flamme",
    song: "Øve os på hinanden",
    country: "DK"
  },
  {
    name: "Destiny",
    song: "Je me casse",
    country: "MT"
  },
  {
    name: "Tix",
    song: "Fallen Angel",
    country: "IE"
  },
  {
    name: "Go_A",
    song: "Шум",
    country: "UA"
  },
  {
    name: "Efendi",
    song: "Mata Hari",
    country: "AZ"
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
