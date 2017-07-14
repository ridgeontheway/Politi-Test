document.addEventListener('DOMContentLoaded', function () {
      document.getElementById("8valuesCLick").addEventListener("click", function(){
        document.getElementById("8iframe").src='https://8values.github.io/quiz.html';
        document.getElementById("8iframe").height="100%";
        document.getElementById("8iframe").width="100%";
        document.getElementById("8iframe").target="_parent";
      });
      document.getElementById("spekrValuesClick").addEventListener("click", function(){
        document.getElementById("spekrIframe").src='http://spekr.org/';
        document.getElementById("spekrIframe").height="100%";
        document.getElementById("spekrIframe").width="100%";
        document.getElementById("spekrIframe").target="_parent";
      });
});
