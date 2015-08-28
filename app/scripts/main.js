// jshint devel:true

window.app = window.app || new Object;

var currentWordObj = $('#currentWord');
var finishObj = $('#finishMessage');
var scoreObj = $('#score');

app.log = function(smth) {
  console.log(smth);
};

app.listener = new AudioListener();

app.words = [
  'soft',
  'cold',
  //'strange',
  //'never',
  //'midwife',
  //'stork'
];

app.wordNum = 0;

app.score = 0;

app.goToNextWord = function() {
  if (app.wordNum == (app.words.length - 1)) {
    app.finish();
    return;
  }
  app.wordNum++;
  app.loadWord(app.wordNum);
};

app.loadWord = function(num) {
  currentWordObj.text(app.words[app.wordNum]);
};

app.changeScore = function(delta) {
  app.score += delta;
  scoreObj.text(app.score);
};

app.finish = function() {
  currentWordObj.hide();
  finishObj.removeClass('hidden');
  app.log('FINISHED!');
};

app.sayNo = function() {
  app.helpers.shake(currentWordObj);
  app.log('NOOOOOO!');
};

app.init = function() {
  app.log('Let\'s get started.');
  app.loadWord(app.wordNum);
  app.listener.listen('en', function(text) {
    text = text.trim();
    app.log(text);
    if(text == app.words[app.wordNum]) {
      app.goToNextWord();
      app.changeScore(1);
    } else if (text == 'skip' || text == 'next') {
      app.goToNextWord();
    } else {
      app.sayNo();
    }
  });
};

//blast
app.init();
