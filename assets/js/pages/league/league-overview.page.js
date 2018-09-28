parasails.registerPage('league-overview', {
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

    // for (let idx in this.userLeagues) {
    //   let league = this.userLeagues[idx]

    //   if (league && league.nextPeriodical) {
    //     $("span#countdown_" + league.id).countdown(league.nextPeriodical, function(event) {
    //       $(this).text(
    //         parseInt(event.strftime('%D')) > 0 ? event.strftime('%D days %H:%M:%S') : event.strftime('Today %H:%M:%S')
    //       );
    //     });
    //   } else if (league && league.id) {
    //     $("span#countdown_" + league.id).html("No event scheduled")
    //   }
    // }

    $(document).ready(function(){
      let map = new GMaps({
        el: '#locationMap',
        lat: 38.759363,
        lng: -9.108276,
      });

      map.drawOverlay({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng(),
        content: '<div class="overlay">Lima<div class="overlay_arrow above"></div></div>',
        verticalAlign: 'top',
        horizontalAlign: 'center'
      });
    });

    
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    
  }
});
