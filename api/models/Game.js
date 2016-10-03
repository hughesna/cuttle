/**
* Game.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		required: true,
  	},

  	status: {
  		type: 'boolean',
  		defaultsTo: true,
  		required: true,
  	},

    players: {
      collection: 'user',
      defaultsTo: [],
    },

    p0Ready: {
      type: 'boolean',
      defaultsTo: false
    },

    p1Ready: {
      type: 'boolean',
      defaultsTo: false
    },

    deck: {
      collection: 'card',
      via: 'deck'
    },

    topCard: {
      model: 'card',
      via: 'topCard'
    },

    secondCard: {
      model: 'card',
      via: 'secondCard'
    },

    scrap: {
      collection: 'card',
      via: 'scrap'
    },

    turn: {
      type: 'integer',
      defaultsTo: 0
    },

    log: {
      type: "array",
      defaultsTo: []
    }
  }
};

