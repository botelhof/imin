module.exports = {


  friendlyName: 'View leagues overview',


  description: 'Display "Leagues Overview" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/league/leagues-overview',
    }

  },


  fn: async function (inputs, exits) {

    // await User.addToCollection(2, 'leagues').members([1, 2, 3, 7, 8, 9, 12])
    // var newPeriodicalRecord = await Periodical.create({
    //   isOneDayWeek: true,
    //   // league: 3,
    //   periodicalStartsAt: Date.now(),
    // })
    // // .intercept('E_UNIQUE', 'emailAlreadyInUse')
    // // .intercept({name: 'UsageError'}, 'invalid')
    // .fetch();

    // console.log('newPeriodicalRecord: ', newPeriodicalRecord)
    // await League.addToCollection(2, 'periodicals').members([newPeriodicalRecord.id])

    var userWithLeagues = await User.findOne({id: this.req.session.userId}).populate('leagues')
    // console.log('userWithLeagues: ', userWithLeagues)

    let leagues = new Array()
    for (let leagueIndex in userWithLeagues.leagues) {
      if (userWithLeagues.leagues[leagueIndex]) {
        console.log('userWithLeagues.leagues[leagueIndex].id: ', userWithLeagues.leagues[leagueIndex].id)
        let userLeaguesWithPeriodicals = await League.findOne({id: userWithLeagues.leagues[leagueIndex].id}).populate('periodicals')
        leagues.push(userLeaguesWithPeriodicals)
        console.log('userLeaguesWithPeriodicals: ', userLeaguesWithPeriodicals)
      }
    }

    // var userWithLeagues = await Periodical.findOne({id: this.req.session.userId}).populate('leagues')
    // console.log('userWithLeagues: ', userWithLeagues)


    //return exits.success({userLeagues: userWithLeagues.leagues})
    return exits.success({userLeagues: leagues})

  }


};
