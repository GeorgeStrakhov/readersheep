# Readersheep

_teaching kids how to read, one baah at a time_

Educational mini-game / experiment, utilizing [HTML5 Web Speech API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API?hl=en) to teach Kids how to read.
Only tested in Chrome (both desktop & mobile).
Voice recognition leaves a lot to be desired, but still playable in a quiet environment.

### [Play Now](http://readersheep.xyz)

----------

## Pages

* `/` - welcome page ->
    * explain the game
    * choose language (check for browser support and whether we have levels for this language!)
    * choose level
    * choose reward video
    * start game

* `/play/` - gameplay ->
    * activate the microphone
    * see current word(s)
    * see how many are left
    * skip to next
    * when finished -> see the reward video in an embed (no related videos etc.)

* `/about/` - about ->
    * short blurb about the game
    * contact info

----------

## TODO

* brand & visuals
* implement random sequence with no repeats (e.g. for alphabet level)
* switch current implementation of the speech recognizer to a [better and faster one](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API?hl=en)
* create app.session, where hold current session values. utilize local storage to keep progress and presets (language etc.)
* allow multiple languages (en/ru)
* explore where to get words from (beyond static: any apis? ideally without involving server-side...)
* explore whether rhyming words work better
* allow multiple levels (from letters short words to sentences). for letters see [here](http://stackoverflow.com/questions/12449242/recognize-letters-said-by-a-person-using-java)
* allow input of my own text (split into sentences, lines, words...)
* allow "skip" / "next"
* allow input / change of "reward" in the form of a cartoon link from youtube (embed and autoplay instead of redirect. specify no next in the embed params). choose the default reward video. show "next level" button under the video.
* add analytics & social buttons
* create "about page"
* deploy to github pages
* test on mobile
* submit to Chrome Experiments

## DONE

* basic proof of concept
