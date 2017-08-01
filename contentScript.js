var seconds = 1;
var cancel;
var _8ValuesDisplay = false;
var  spelkrDisplay = false;

document.addEventListener('DOMContentLoaded', function () {
      document.getElementById("8valuesCLick").addEventListener("click", function(){
        document.getElementById("_8values").style.display="none";
        document.getElementById("spekrValues").style.display="none";
        unfade(document.getElementById("loadingContainer"));

        document.getElementById("popUpDiv").style.width="800px";
        document.getElementById("popUpDiv").style.height="580px";

        seconds = 1;
        cancel = setInterval(incrementSeconds8Values, 1000);
      });

      document.getElementById("_8PopupImg").addEventListener("click", function(){
        if (_8ValuesDisplay === false){
          document.getElementById("spekrIframe").style.display="none";
          document.getElementById("bar").style.display="none";

          unfade(document.getElementById("loadingContainer"));
          /* WORKING HERE */
          document.getElementById("popUpDiv").style.width="800px";
          document.getElementById("popUpDiv").style.height="580px";

          seconds = 1;
          cancel = setInterval(incrementSeconds8ValuesPopup, 1000);
        }
      });

      document.getElementById("spekrPopupImg").addEventListener("click", function(){
        document.getElementById("_8iframe").style.visibility="hidden";
        document.getElementById("spekrIframe").style.visibility="visible";

        document.getElementById("popUpDiv").style.width="500px";
        document.getElementById("popUpDiv").style.height="580px";

        document.getElementById("spekrIframe").src='http://spekr.org/';
        document.getElementById("spekrIframe").target="_parent";

        document.getElementById("spekrIframe").style.height="580px";
        document.getElementById("spekrIframe").style.width="100%";

        document.getElementById("bar").style.visibility="visible";
      });

      document.getElementById("spekrValuesClick").addEventListener("click", function(){
        document.getElementById("_8values").style.display="none";
        document.getElementById("spekrValues").style.display="none";
        unfade(document.getElementById("loadingContainer"));

        document.getElementById("popUpDiv").style.width="500px";
        document.getElementById("popUpDiv").style.height="580px";

        seconds = 1;
        cancel = setInterval(incrementSecondsSpekr, 1000);
      });
});

function fade(element) {
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

function unfade(element) {
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

function incrementSeconds8Values() {
    seconds += 1;
    if (seconds === 5){
        document.getElementById("_8iframe").style.width="100%";
        document.getElementById("_8iframe").style.height="580px";

        fade(document.getElementById("loadingContainer"));
        document.getElementById("_8iframe").src='https://8values.github.io/quiz.html';
        unfade(document.getElementById("_8iframe"));
        unfade(document.getElementById("bar"));
        _8ValuesDisplay = true;
        clearInterval(cancel);
      }
}

function incrementSeconds8ValuesPopup() {
    seconds += 1;
    if (seconds === 5){
      document.getElementById("_8iframe").style.width="100%";
      document.getElementById("_8iframe").style.height="580px";
      document.getElementById("_8iframe").src='https://8values.github.io/quiz.html';

        fade(document.getElementById("loadingContainer"));
        document.getElementById("_8iframe").src='https://8values.github.io/quiz.html';
        unfade(document.getElementById("_8iframe"));
        unfade(document.getElementById("bar"));
        clearInterval(cancel);
      }
}

function incrementSecondsSpekr() {
    seconds += 1;
    if (seconds === 5){
      document.getElementById("spekrIframe").style.height="580px";
      document.getElementById("spekrIframe").style.width="100%";

        fade(document.getElementById("loadingContainer"));
        document.getElementById("spekrIframe").src='http://spekr.org/';
        unfade(document.getElementById("spekrIframe"));
        unfade(document.getElementById("bar"));
        spelkrDisplay = true;
        clearInterval(cancel);
      }
}
