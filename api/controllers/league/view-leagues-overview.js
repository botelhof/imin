module.exports = {


  friendlyName: 'View leagues overview',


  description: 'Display "Leagues Overview" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/league/leagues-overview',
    }

  },


  fn: async function (inputs, exits) {

    return exits.success()

  }


};
