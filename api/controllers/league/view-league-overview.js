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
    
    let leagueData = await League.findOne({id: inputs.leagueId}).populate('users').populate('periodicals')
    console.log('league data: ', leagueData)

    return exits.success({leagueData: leagueData})

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
