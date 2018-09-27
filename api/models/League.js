/**
 * League.js
 *
 * League for users
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    fullName: {
      type: 'string',
      required: true,
      description: 'Full representation of the league\'s name',
      maxLength: 80,
      example: 'Mondays, 20h at Olivais'
    },

    fullDescription: {
      type: 'string',
      description: 'Full representation of the league\'s description',
      maxLength: 500,
      example: 'Kick some balls to goaaaaaal'
    },

    isPeriodical: {
      type: 'boolean',
      defaultsTo: true,
      description: 'Whether this is periodical or manual schedule',
      extendedDescription:
`This can be periodical and then the user must select the period or is not periodical and the user needs to schedule manually`
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a
    users: {
      collection: 'user',
      via: 'leagues'
    },

    periodicals: {
      collection: 'periodical',
      via: 'league'
    },

    userLeagueRoles: {
      collection: 'userLeagueRole',
      via: 'league'
    },

  },


};
