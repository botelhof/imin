/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {

  // Import dependencies
  var path = require('path');

  // This bootstrap version indicates what version of fake data we're dealing with here.
  var HARD_CODED_DATA_VERSION = 4;

  // This path indicates where to store/look for the JSON file that tracks the "last run bootstrap info"
  // locally on this development computer (if we happen to be on a development computer).
  var bootstrapLastRunInfoPath = path.resolve(sails.config.appPath, '.tmp/bootstrap-version.json');

  // Whether or not to continue doing the stuff in this file (i.e. wiping and regenerating data)
  // depends on some factors:
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // If the hard-coded data version has been incremented, or we're being forced
  // (i.e. `--drop` or `--environment=test` was set), then run the meat of this
  // bootstrap script to wipe all existing data and rebuild hard-coded data.
  if (sails.config.models.migrate !== 'drop' && sails.config.environment !== 'test') {
    // If this is _actually_ a production environment (real or simulated), or we have
    // `migrate: safe` enabled, then prevent accidentally removing all data!
    if (process.env.NODE_ENV==='production' || sails.config.models.migrate === 'safe') {
      sails.log.warn('Since we are running with migrate: \'safe\' and/or NODE_ENV=production (in the "'+sails.config.environment+'" Sails environment, to be precise), skipping the rest of the bootstrap to avoid data loss...');
      return done();
    }//•

    // Compare bootstrap version from code base to the version that was last run
    var lastRunBootstrapInfo = await sails.helpers.fs.readJson(bootstrapLastRunInfoPath)
    .tolerate('doesNotExist');// (it's ok if the file doesn't exist yet-- just keep going.)

    if (lastRunBootstrapInfo && lastRunBootstrapInfo.lastRunVersion === HARD_CODED_DATA_VERSION) {
      sails.log('Skipping v'+HARD_CODED_DATA_VERSION+' bootstrap script...  (because it\'s already been run)');
      sails.log('(last run on this computer: @ '+(new Date(lastRunBootstrapInfo.lastRunAt))+')');
      return done();
    }//•

    sails.log('Running v'+HARD_CODED_DATA_VERSION+' bootstrap script...  ('+(lastRunBootstrapInfo ? 'before this, the last time the bootstrap ran on this computer was for v'+lastRunBootstrapInfo.lastRunVersion+' @ '+(new Date(lastRunBootstrapInfo.lastRunAt)) : 'looks like this is the first time the bootstrap has run on this computer')+')');
  }
  else {
    sails.log('Running bootstrap script because it was forced...  (either `--drop` or `--environment=test` was used)');
  }

  // Since the hard-coded data version has been incremented, and we're running in
  // a "throwaway data" environment, delete all records from all models.
  for (let identity in sails.models) {
    await sails.models[identity].destroy({});
  }//∞

  // By convention, this is a good place to set up fake data during development.
  await User.createEach([
    { emailAddress: 'admin@example.com', fullName: 'admin', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('admin') },
    { emailAddress: 'fmgbotelho@gmail.com', fullName: 'Filipe Botelho', password: await sails.helpers.passwords.hashPassword('flypp83') },
    { emailAddress: 'player1@example.com', fullName: 'Player 1', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player2@example.com', fullName: 'Player 2', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player3@example.com', fullName: 'Player 3', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player4@example.com', fullName: 'Player 4', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player5@example.com', fullName: 'Player 5', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player6@example.com', fullName: 'Player 6', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player7@example.com', fullName: 'Player 7', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player8@example.com', fullName: 'Player 8', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player9@example.com', fullName: 'Player 9', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player10@example.com', fullName: 'Player 10', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player11@example.com', fullName: 'Player 11', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player12@example.com', fullName: 'Player 12', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player13@example.com', fullName: 'Player 13', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player14@example.com', fullName: 'Player 14', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player15@example.com', fullName: 'Player 15', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player16@example.com', fullName: 'Player 16', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player17@example.com', fullName: 'Player 17', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player18@example.com', fullName: 'Player 18', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player19@example.com', fullName: 'Player 19', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player20@example.com', fullName: 'Player 20', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player21@example.com', fullName: 'Player 21', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player22@example.com', fullName: 'Player 22', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player23@example.com', fullName: 'Player 23', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player24@example.com', fullName: 'Player 24', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player25@example.com', fullName: 'Player 25', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player26@example.com', fullName: 'Player 26', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player27@example.com', fullName: 'Player 27', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player28@example.com', fullName: 'Player 28', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player29@example.com', fullName: 'Player 29', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player30@example.com', fullName: 'Player 30', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player31@example.com', fullName: 'Player 31', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player32@example.com', fullName: 'Player 32', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player33@example.com', fullName: 'Player 33', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player34@example.com', fullName: 'Player 34', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player35@example.com', fullName: 'Player 35', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player36@example.com', fullName: 'Player 36', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player37@example.com', fullName: 'Player 37', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player38@example.com', fullName: 'Player 38', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player39@example.com', fullName: 'Player 39', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player40@example.com', fullName: 'Player 40', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player41@example.com', fullName: 'Player 41', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player42@example.com', fullName: 'Player 42', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player43@example.com', fullName: 'Player 43', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player44@example.com', fullName: 'Player 44', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player45@example.com', fullName: 'Player 45', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player46@example.com', fullName: 'Player 46', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player47@example.com', fullName: 'Player 47', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player48@example.com', fullName: 'Player 48', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player49@example.com', fullName: 'Player 49', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player50@example.com', fullName: 'Player 50', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player51@example.com', fullName: 'Player 51', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player52@example.com', fullName: 'Player 52', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player53@example.com', fullName: 'Player 53', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player54@example.com', fullName: 'Player 54', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player55@example.com', fullName: 'Player 55', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player56@example.com', fullName: 'Player 56', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player57@example.com', fullName: 'Player 57', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player58@example.com', fullName: 'Player 58', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player59@example.com', fullName: 'Player 59', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player60@example.com', fullName: 'Player 60', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player61@example.com', fullName: 'Player 61', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player62@example.com', fullName: 'Player 62', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player63@example.com', fullName: 'Player 63', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player64@example.com', fullName: 'Player 64', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player65@example.com', fullName: 'Player 65', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player66@example.com', fullName: 'Player 66', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player67@example.com', fullName: 'Player 67', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player68@example.com', fullName: 'Player 68', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player69@example.com', fullName: 'Player 69', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player70@example.com', fullName: 'Player 70', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player71@example.com', fullName: 'Player 71', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player72@example.com', fullName: 'Player 72', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player73@example.com', fullName: 'Player 73', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player74@example.com', fullName: 'Player 74', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player75@example.com', fullName: 'Player 75', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player76@example.com', fullName: 'Player 76', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player77@example.com', fullName: 'Player 77', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player78@example.com', fullName: 'Player 78', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player79@example.com', fullName: 'Player 79', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player80@example.com', fullName: 'Player 80', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player81@example.com', fullName: 'Player 81', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player82@example.com', fullName: 'Player 82', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player83@example.com', fullName: 'Player 83', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player84@example.com', fullName: 'Player 84', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player85@example.com', fullName: 'Player 85', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player86@example.com', fullName: 'Player 86', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player87@example.com', fullName: 'Player 87', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player88@example.com', fullName: 'Player 88', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player89@example.com', fullName: 'Player 89', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player90@example.com', fullName: 'Player 90', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player91@example.com', fullName: 'Player 91', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player92@example.com', fullName: 'Player 92', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player93@example.com', fullName: 'Player 93', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player94@example.com', fullName: 'Player 94', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player95@example.com', fullName: 'Player 95', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player96@example.com', fullName: 'Player 96', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player97@example.com', fullName: 'Player 97', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player98@example.com', fullName: 'Player 98', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player99@example.com', fullName: 'Player 99', password: await sails.helpers.passwords.hashPassword('abc123') },
    { emailAddress: 'player100@example.com', fullName: 'Player 100', password: await sails.helpers.passwords.hashPassword('abc123') },
  ]);

  await User.addToCollection(2, 'leagues').members([1, 2, 3, 7, 8, 9, 12])

  await League.createEach([
    { fullName: 'League 1', fullDescription: 'League 1'},
    { fullName: 'Monday\'s at Cabo Ruivo at 21h - Some School Arena', fullDescription: 'Monday\'s at Cabo Ruivo at 21h - Some School Arena'},
    { fullName: 'League 3', fullDescription: 'League 3'},
    { fullName: 'League 4', fullDescription: 'League 4'},
  ]);
  
  var newPeriodicalRecord = await Periodical.create({
    isOneDayWeek: true,
    periodicalStartsAt: Date.now(),
  })
  .fetch();
  await League.addToCollection(2, 'periodicals').members([newPeriodicalRecord.id])
  
  await UserLeagueRole.createEach([
    { role: 'Player', fullDescription: 'Athlete', league: 1, user: '2'},
    { role: 'Treasurer', fullDescription: 'Money talker', league: 1, user: '2'},
    { role: 'Player', fullDescription: 'Athlete', league: 1, user: '3'},
    { role: 'Player', fullDescription: 'Athlete', league: 1, user: '4'},
    { role: 'Player', fullDescription: 'Athlete', league: 1, user: '5'},
    { role: 'Player', fullDescription: 'Athlete', league: 1, user: '6'},
    { role: 'Player', fullDescription: 'Athlete', league: 1, user: '7'},
  ]);

  // for (let ind = 1 ; ind <= 100; ind++) {
  //   console.log("{ emailAddress: 'player" + ind + "@example.com', fullName: 'Player " + ind + "', password: await sails.helpers.passwords.hashPassword('abc123') },")
  // }

  // Save new bootstrap version
  await sails.helpers.fs.writeJson.with({
    destination: bootstrapLastRunInfoPath,
    json: {
      lastRunVersion: HARD_CODED_DATA_VERSION,
      lastRunAt: Date.now()
    },
    force: true
  })
  .tolerate((err)=>{
    sails.log.warn('For some reason, could not write bootstrap version .json file.  This could be a result of a problem with your configured paths, or, if you are in production, a limitation of your hosting provider related to `pwd`.  As a workaround, try updating app.js to explicitly pass in `appPath: __dirname` instead of relying on `chdir`.  Current sails.config.appPath: `'+sails.config.appPath+'`.  Full error details: '+err.stack+'\n\n(Proceeding anyway this time...)');
  });

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
