// jshint devel:true

window.app = window.app || new Object;

app.loadListener = function(lang) {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Looks like your browser doesn\'t support web speech recognition :( Please use the latest google chrome!');
  } else {
    var recognizing = false;
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
      recognizing = true;
    };

    recognition.onerror = function(event) {
      app.log(event.error);
    };

    recognition.onresult = function(event) {
      var finalTranscript
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript = event.results[i][0].transcript;
          if(finalTranscript) {
            app.checkSnip(finalTranscript);
          }
        }
      }
    };
  }
  return recognition;
};
