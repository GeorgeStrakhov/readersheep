// jshint devel:true

window.app = window.app || new Object;

var currentSnipO = $('#currentSnip');
var finishObj = $('#finishMessage');
var scoreObj = $('#score');

app.log = function(smth) {
  console.log(smth);
};

app.listener = new AudioListener();

app.loadLevel = function(levelName) {
  var level = app.levels[levelName];
  if(!level || !level.snippets) {
    throw "no such level";
  }
  app.snippets = level.snippets;
  app.snipN = 0;
  app.score = 0;
};

app.goToNextSnip = function() {
  if (app.snipN == (app.snippets.length - 1)) {
    app.finish();
    return;
  }
  app.snipN++;
  app.loadSnip(app.snipN);
};

app.loadSnip = function(num) {
  currentSnipO.text(app.snippets[app.snipN].spell);
};

app.changeScore = function(delta) {
  app.score += delta;
  scoreObj.text(app.score);
};

app.finish = function() {
  currentSnipO.hide();
  finishObj.removeClass('hidden');
  app.log('FINISHED!');
};

app.sayNo = function() {
  app.helpers.shake(currentSnipO);
  app.log('NOOOOOO!');
};

app.init = function() {
  app.log('Let\'s get started.');
  app.loadLevel('alphabet');
  app.loadSnip(app.snipN);
  app.listener.listen('en', function(text) {
    text = text.trim().toLowerCase();
    app.log(text);
    if($.inArray(text, app.snippets[app.snipN].say.split(',')) > -1) {
      app.goToNextSnip();
      app.changeScore(1);
    } else if (text == 'skip' || text == 'next') {
      app.goToNextSnip();
    } else {
      app.sayNo();
    }
  });
};

//blast
app.init();
