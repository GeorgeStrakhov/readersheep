// jshint devel:true

window.app = window.app || new Object;

var currentSnipO = $('#currentSnip');
var finishObj = $('#finishMessage');
var scoreObj = $('#score');

app.log = function(smth) {
  console.log(smth);
};

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

app.checkSnip = function(snip) {
  snip = snip.trim().toLowerCase();
  app.log(snip);
  if($.inArray(snip, app.snippets[app.snipN].say.split(',')) > -1) {
    app.goToNextSnip();
    app.changeScore(1);
  } else if ($.inArray(snip, ['skip', 'next', 'i don\'t know', 'don\'t know']) > -1) {
    app.goToNextSnip();
  } else {
    app.sayNo();
  }
};

app.init = function() {
  app.log('Let\'s get started.');
  app.recognition = app.loadListener();
  app.recognition.start();
  app.loadLevel('alphabet');
  app.loadSnip(app.snipN);  
};

//blast
app.init();
