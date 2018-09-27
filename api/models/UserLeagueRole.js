/**
 * UserLeagueRole.js
 *
 * User league role
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    role: {
      type: 'string',
      required: true,
      isIn: ['Player', 'Guest', 'Organizer', 'Treasurer'],
      description: 'Full representation of the role\'s name',
      maxLength: 80,
      example: 'Player'
    },

    fullDescription: {
      type: 'string',
      description: 'Full representation of the role\'s description',
      maxLength: 500,
      example: 'Take care of the money'
    },

    isActive: {
      type: 'boolean',
      defaultsTo: true,
      description: 'Is active at the moment',
      extendedDescription: `Is active at the moment`
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a
    league: {
      model: 'league',
    },

    user: {
      model: 'user',
    },
  },


};
