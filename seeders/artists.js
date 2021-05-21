'use strict';

// TODO
// MODIFIER LA LISTE SUIVANTE POUR CORRESPONDRE AU CANDIDAT DE L'ANNEE DANS L'ORDRE
// EDIT FOLLOWING LIST TO MATCH CURRENT YEAR ARTISTS IN CORRECT ORDER

// LISTE DES CODES PAYS DISPONIBLE ICI (en anglais) : https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// COUNTRY CODE LIST AVAILABLE HERE: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

const ARTISTS_LIST  = [
  {
    name: "Elena Tsagrinou",
    song: "El Diablo",
    country: "CY" 
  },
  {
    name: "Anxhela Peristeri",
    song: "Karma",
    country: "AL" 
  },
  {
    name: "Eden Alene",
    song: "Set Me Free",
    country: "IL" 
  },
  {
    name: "Hooverphonic",
    song: "The Wrong Place",
    country: "BE" 
  },
  {
    name: "Manizha",
    song: "Russian Woman",
    country: "RU" 
  },
  {
    name: "Destiny",
    song: "Je Me Casse",
    country: "MT" 
  },
  {
    name: "The Black Mamba",
    song: "Love Is On My Side",
    country: "PT" 
  },
  {
    name: "Hurricane",
    song: "Loco Loco",
    country: "RS" 
  },
  {
    name: "James Newman",
    song: "Embers",
    country: "GB" 
  },
  {
    name: "Stefania",
    song: "Last Dance",
    country: "GR" 
  },
  {
    name: "Gjon's Tears",
    song: "Tout l'Univers",
    country: "CH" 
  },
  {
    name: "Da∂i Freyr og Gagnamagni∂",
    song: "10 Years",
    country: "IS" 
  },
  {
    name: "Blas Cantó",
    song: "Voy A Querdarme",
    country: "ES" 
  },
  {
    name: "Natalia Gordienko",
    song: "SUGAR",
    country: "MD" 
  },
  {
    name: "Jendrik",
    song: "I Don't Feel Hate",
    country: "DE" 
  },
  {
    name: "Blind Channel",
    song: "Dark Side",
    country: "FI" 
  },
  {
    name: "Victoria",
    song: "Growing Up is Getting Old",
    country: "BG" 
  },
  {
    name: "The Roop",
    song: "Discoteque",
    country: "LT" 
  },
  {
    name: "Go_A",
    song: "Shum",
    country: "UA" 
  },
  {
    name: "Barbara Pravi",
    song: "Voilà",
    country: "FR" 
  },
  {
    name: "Efendi",
    song: "Mata Hari",
    country: "AZ" 
  },
  {
    name: "TIX",
    song: "Fallen Angel",
    country: "NO" 
  },
  {
    name: "Jeangu Macrooy",
    song: "Birth of a New Age",
    country: "NL" 
  },
  {
    name: "Måneskin",
    song: "Zitti E Buoni",
    country: "IT" 
  },
  {
    name: "Tusse",
    song: "Voices",
    country: "SE" 
  },
  {
    name: "Senhit",
    song: "Adrenalina",
    country: "SM" 
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
