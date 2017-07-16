document.addEventListener('DOMContentLoaded', function () {
      document.getElementById("8valuesCLick").addEventListener("click", function(){
        document.getElementById("popUpDiv").style.width="600px";
        document.getElementById("popUpDiv").style.height="900px";
        document.getElementById("_8iframe").style.height="100%";
        document.getElementById("_8iframe").style.width="100%";
        document.getElementById("_8iframe").style.width="100%";
        document.getElementById("_8iframe").src='https://8values.github.io/quiz.html';
        document.getElementById("_8iframe").style.zoom=".71";

      });
      document.getElementById("spekrValuesClick").addEventListener("click", function(){
        document.getElementById("popUpDiv").style.width="500px";
        document.getElementById("popUpDiv").style.height="500px";
        document.getElementById("spekrIframe").src='http://spekr.org/';
        document.getElementById("spekrIframe").style.height="100%";
        document.getElementById("spekrIframe").style.width="100%";
        document.getElementById("spekrIframe").target="_parent";

      });
});
