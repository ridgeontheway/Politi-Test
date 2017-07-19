document.addEventListener('DOMContentLoaded', function () {
      document.getElementById("8valuesCLick").addEventListener("click", function(){
        document.getElementById("_8values").style.display="none";
        document.getElementById("spekrValues").style.display="none";

        document.getElementById("popUpDiv").style.width="800px";
        document.getElementById("popUpDiv").style.height="580px";


        document.getElementById("_8iframe").src='https://8values.github.io/quiz.html';
        document.getElementById("_8iframe").target="_parent";

        document.getElementById("_8iframe").style.width="100%";
        document.getElementById("_8iframe").style.height="580px";
      });

      document.getElementById("spekrValuesClick").addEventListener("click", function(){
        document.getElementById("_8values").style.display="none";
        document.getElementById("spekrValues").style.display="none";

        document.getElementById("popUpDiv").style.width="500px";
        document.getElementById("popUpDiv").style.height="580px";

        document.getElementById("spekrIframe").src='http://spekr.org/';
        document.getElementById("spekrIframe").target="_parent";

        document.getElementById("spekrIframe").style.height="580px";
        document.getElementById("spekrIframe").style.width="100%";
      });
});
