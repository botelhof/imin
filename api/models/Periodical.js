/**
 * Periodical.js
 *
 * League periods
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    // fullName: {
    //   type: 'string',
    //   required: true,
    //   description: 'Full representation of the league\'s name',
    //   maxLength: 120,
    //   example: 'Mondays, 20h at Olivais'
    // },

    // fulldescription: {
    //   type: 'string',
    //   required: true,
    //   description: 'Full representation of the league\'s description',
    //   maxLength: 500,
    //   example: 'Kick some balls to goaaaaaal'
    // },

    isEveryDays: {
      type: 'boolean',
      defaultsTo: false,
      description: 'Every days of the week',
      extendedDescription:
      `Every days of the week`
    },

    isOneDayWeek: {
      type: 'boolean',
      defaultsTo: false,
      description: 'Every week',
      extendedDescription:
      `Every week`
    },

    isOneDayMonth: {
      type: 'boolean',
      defaultsTo: false,
      description: 'Every month',
      extendedDescription:
      `Every month`
    },

    periodicalStartsAt: {
      type: 'number',
      required: true,
      description: 'A JS timestamp (epoch ms) representing the moment when this start to count',
      example: 1502844074211
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
    }
  },


};
