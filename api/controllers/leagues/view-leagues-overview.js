module.exports = {


  friendlyName: 'View leagues overview',


  description: 'Display "Leagues Overview" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/leagues/leagues-overview',
    }

  },


  fn: async function (inputs, exits) {

    return exits.success()

  }


};
