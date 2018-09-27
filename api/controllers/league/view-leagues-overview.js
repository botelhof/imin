module.exports = {


  friendlyName: 'View leagues overview',


  description: 'Display "Leagues Overview" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/league/leagues-overview',
    }

  },


  fn: async function (inputs, exits) {
    var userWithLeagues = await User.findOne({id: this.req.session.userId}).populate('leagues')
    // console.log('userWithLeagues: ', userWithLeagues)

    let leagues = new Array()
    for (let leagueIndex in userWithLeagues.leagues) {
      if (userWithLeagues.leagues[leagueIndex]) {
        let userLeaguesWithPeriodicals = await League.findOne({id: userWithLeagues.leagues[leagueIndex].id}).populate('periodicals')
        userLeaguesWithPeriodicals['nextPeriodical'] = getNextPeriodical(userLeaguesWithPeriodicals.periodicals)
        leagues.push(userLeaguesWithPeriodicals)
      }
    }
    return exits.success({userLeagues: leagues})

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