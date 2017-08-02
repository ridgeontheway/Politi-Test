/* Initial Variables */
var seconds = 1;
var cancel;
var _8ValuesDisplay = false;
var  spekrDisplay = false;

/* How the user actions are delt with */
document.addEventListener('DOMContentLoaded', function () {

     window.addEventListener('offline',showOffline); //if the user's internet connection is dropped

     document.getElementById("8valuesCLick").addEventListener("click", function(){ //handles the user wanting to switch to the 8values test, from the main menu
        /* Cleaning  the menu screen */
        document.getElementById("_8values").style.display="none";
        document.getElementById("spekrValues").style.display="none";

        /* fades the loading circle in - used to cover up the iframe src change */
        fadeIn(document.getElementById("loadingContainer"));

        /* changing the size of the extension to fit the iframe best - this is the max size that chrome lets you go */
        document.getElementById("popUpDiv").style.width="800px";
        document.getElementById("popUpDiv").style.height="580px";

        /* lets me control how long the loading circle stays on the screen for */
        seconds = 1;
        cancel = setInterval(incrementSeconds8Values, 1000);
      });

      document.getElementById("_8PopupImg").addEventListener("click", function(){ //handles the user wanting to switch to the 8values test from sprkr
        spekrDisplay = false;

        /* Checks to see if the user is trying to take the test agian, or switching to it from the 8vlaues test */
        if (_8ValuesDisplay === false){
          document.getElementById("spekrIframe").style.display="none";
          document.getElementById("bar").style.display="none";

          fadeIn(document.getElementById("loadingContainer"));
          document.getElementById("popUpDiv").style.width="800px";
          document.getElementById("popUpDiv").style.height="580px";

          seconds = 1;
          cancel = setInterval(incrementSeconds8ValuesPopup, 1000);
        }
        else{ //if the user wants to re-set the test
          document.getElementById("_8iframe").style.display="none";
          document.getElementById("bar").style.display="none";

          fadeIn(document.getElementById("loadingContainer"));

          seconds = 1;
          cancel = setInterval(incrementSeconds8ValuesPopupReset, 1000);
        }
      });

      document.getElementById("spekrPopupImg").addEventListener("click", function(){ //'handle the user wanting to switch to spekr from 8values'
        _8ValuesDisplay = false;

        /* Checks to see if the user is trying to take the test agian, or switching to it from the 8vlaues test */
        if (spekrDisplay === false){
          document.getElementById("_8iframe").style.display="none";
          document.getElementById("bar").style.display="none";

          /* fades the loading circle in - used to cover up the iframe src change */
          fadeIn(document.getElementById("loadingContainer"));
          document.getElementById("popUpDiv").style.width="500px";
          document.getElementById("popUpDiv").style.height="580px";

          seconds = 1;
          cancel = setInterval(incrementSecondsSpekrPopup, 1000);
      }
      else {   //if the user wants to re-set the test
          document.getElementById("spekrIframe").style.display="none";
          document.getElementById("bar").style.display="none";

          fadeIn(document.getElementById("loadingContainer"));
          seconds = 1;
          cancel = setInterval(incrementSecondsSpekrPopupReset, 1000);
      }
    });

      document.getElementById("spekrValuesClick").addEventListener("click", function(){ //handle the user wanting to switch to the spekr test from the main menu screen
        /* Cleaning  the menu screen */
        document.getElementById("_8values").style.display="none";
        document.getElementById("spekrValues").style.display="none";

        /* fades the loading circle in - used to cover up the iframe src change */
        fadeIn(document.getElementById("loadingContainer"));

        /* changing the size of the extension to fit the iframe best */
        document.getElementById("popUpDiv").style.width="500px";
        document.getElementById("popUpDiv").style.height="580px";

        seconds = 1;
        cancel = setInterval(incrementSecondsSpekr, 1000);
      });
});

/* handle the situation when the user becomes offline  */
function showOffline(){
  var divsToHide = document.getElementsByClassName("hideable"); //creates an array of elements
  for(var i = 0; i < divsToHide.length; i++){
      divsToHide[i].style.display = "none"; //sets all elements in the class to disappear
  }
  /*Offline container fills the screen */
  document.getElementById("offlineContainer").style.width="100%";
  document.getElementById("offlineContainer").style.height="100%";

  if(_8ValuesDisplay === true){ //sets size of the message depending if the user was taking the 8values test, or the spekr
    document.getElementById("offlineBox").style.height="15%";
    document.getElementById("offlineBox").style.width="45%";
    document.getElementById("offlineBox").style.textIndent = "0em";
  }
  else{ //user was taking the spekr test
    document.getElementById("offlineBox").style.height="15%";
    document.getElementById("offlineBox").style.width="70%";
    document.getElementById("offlineBox").style.textIndent = "0em";
  }
}

/* Handles  when I want to fade out elements */
function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = "none";
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

/* Handles when I want to fade in elements */
function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = "block";
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

/* Determines how long the loading spinner will go on for, then deals with the transition between different parts of the extension (main menu, tests, overlay bar)*/
function incrementSeconds8Values() { //when the user is going from the main menu to 8valus test
    seconds += 1;
    if (seconds === 4){
        document.getElementById("_8iframe").style.width="100%";
        document.getElementById("_8iframe").style.height="580px";

        fadeOut(document.getElementById("loadingContainer"));
        document.getElementById("_8iframe").src='https://8values.github.io/quiz.html';
        fadeIn(document.getElementById("_8iframe"));
        fadeIn(document.getElementById("bar"));
        _8ValuesDisplay = true;
        clearInterval(cancel);
      }
}

function incrementSeconds8ValuesPopup() { //when the user clicks on the 8vlaues icon in the overlay bar
    seconds += 1;
    if (seconds === 3){
      document.getElementById("_8iframe").style.width="100%";
      document.getElementById("_8iframe").style.height="580px";

        fadeOut(document.getElementById("loadingContainer"));
        document.getElementById("_8iframe").src='https://8values.github.io/quiz.html';
        fadeIn(document.getElementById("_8iframe"));
        fadeIn(document.getElementById("bar"));
        _8ValuesDisplay = true;
        clearInterval(cancel);
      }
}

function incrementSeconds8ValuesPopupReset() { //if the user wants to reset the 8values test
    seconds += 1;
    if (seconds === 2){
        fadeOut(document.getElementById("loadingContainer"));
        document.getElementById("_8iframe").src='https://8values.github.io/quiz.html';
        fadeIn(document.getElementById("_8iframe"));
        fadeIn(document.getElementById("bar"));
        clearInterval(cancel);
      }
}

function incrementSecondsSpekr() { //if the user wants to go from the main menu to spekr test
    seconds += 1;
    if (seconds === 4){
      document.getElementById("spekrIframe").style.height="580px";
      document.getElementById("spekrIframe").style.width="100%";

        fadeOut(document.getElementById("loadingContainer"));
        document.getElementById("spekrIframe").src='http://spekr.org/';
        fadeIn(document.getElementById("spekrIframe"));
        fadeIn(document.getElementById("bar"));
        spekrDisplay = true;
        clearInterval(cancel);
      }
}

function incrementSecondsSpekrPopupReset() { //if the user wants to reset the spekr test
    seconds += 1;
    if (seconds === 2){
        fadeOut(document.getElementById("loadingContainer"));
        document.getElementById("spekrIframe").src='http://spekr.org/';
        fadeIn(document.getElementById("spekrIframe"));
        fadeIn(document.getElementById("bar"));
        clearInterval(cancel);
      }
}

function incrementSecondsSpekrPopup() { //when the user clicks on the spekr icon in the overlay bar
    seconds += 1;
    if (seconds === 3){
      document.getElementById("spekrIframe").style.height="580px";
      document.getElementById("spekrIframe").style.width="100%";

        fadeOut(document.getElementById("loadingContainer"));
        document.getElementById("spekrIframe").src='http://spekr.org/';
        fadeIn(document.getElementById("spekrIframe"));
        fadeIn(document.getElementById("bar"));
        spekrDisplay = true;
        clearInterval(cancel);
      }
}
