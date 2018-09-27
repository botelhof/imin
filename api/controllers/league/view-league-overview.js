module.exports = {


  friendlyName: 'View league overview',


  description: 'Display "League Overview" page.',

  inputs: {

    leagueId: {
      type: 'number',
      required: true
    },

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/league/league-overview',
    }

  },


  fn: async function (inputs, exits) {
    
    let league = await League.findOne({id: inputs.leagueId}).populate('users').populate('periodicals')
    console.log('league data: ', league)


    return exits.success()

  }
};

getNextPeriodical = (periodicals) => {
  let nextPeriodical
  for (let idx in periodicals) {
    let periodical = periodicals[idx]
    if (periodical && periodical.periodicalStartsAt && (!nextPeriodical || periodical.periodicalStartsAt < nextPeriodical)) {
      nextPeriodical = periodical.periodicalStartsAt
    }
  }
  return nextPeriodical
}