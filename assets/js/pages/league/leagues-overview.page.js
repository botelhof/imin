parasails.registerPage('leagues-overview', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function (){
    _.extend(this, window.SAILS_LOCALS);
  },
  mounted: async function() {
    //…
    // alert(this.userLeagues)
    // $("span#countdown_")

    for (let idx in this.userLeagues) {
      let league = this.userLeagues[idx]

      if (league && league.nextPeriodical) {
        $("span#countdown_" + league.id).countdown(league.nextPeriodical, function(event) {
          $(this).text(
            parseInt(event.strftime('%D')) > 0 ? event.strftime('%D days %H:%M:%S') : event.strftime('Today %H:%M:%S')
          );
        });
      } else if (league && league.id) {
        $("span#countdown_" + league.id).html("No event scheduled")
      }
    }

  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    goToLeague: async function (leagueId) {
      console.log('goToLeague leagueId: ', leagueId)
      window.location = '/league/?leagueId=' + leagueId;
    }
  }
});
