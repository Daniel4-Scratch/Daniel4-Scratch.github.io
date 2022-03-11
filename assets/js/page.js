/*Build website*/
var credits = '<center><h2>Contributors</h2><span class="profile"> <img src="https://avatars0.githubusercontent.com/u/65277548?s=460&u=046c4080657ef13dd8de8cd0e598a92b12839435&v=4"><span class="profile text">Daniel4-Scratch</span></span> </center>'
var template = function(title, banner, content) {
  document.head.innerHTML += '<meta name="theme-color" content="#64748B"> <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"> <meta name="apple-mobile-web-app-capable" content="yes">'
  document.head.innerHTML += '<meta name="HandheldFriendly" content="True"> <meta name="apple-mobile-web-app-capable" content="yes" />'
  document.body.innerHTML =
    '<!DOCTYPE html> <html lang="en"> <head> <link rel="icon" href="https://avatars.githubusercontent.com/u/65277548?v=4"> <link rel="manifest" href="/manifest.webmanifest"/> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>' +
    title +
    ' | Website</title> <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"> <link rel="stylesheet" href="/assets/css/style.css"> <script src="/assets/js/script.js" defer></script> </head> <body> <div class="navbar" id="myTopnav"> <a href="index.html" class="logo"><img src="https://avatars.githubusercontent.com/u/65277548?v=4" width="27" class="r-do" style="border-radius:8px;"> Daniel4-Scratch </a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="ri-menu-fill"></i>    </a> <a href="https://github.com/Daniel4-Scratch/" class="navbar1 button-white right">Github</a> <a href="about.html" class="navbar1 button right">About</a>';
  if (title == "Credits") {
    document.body.innerHTML +=
      '<div class="header">' +
      banner +
      '</div><svg id="thinggy" xmlns="http://www.w3.org/2000/svg" class="w-100 thinggy" height="100" width="100%" fill="var(--theme)"  style=";"" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0C50 1e2 80 1e2 1e2.0z" class="thinggy"></path></svg> <div class="content">' +
      credits +
      "" +
      content +
      '</div><svg id="thinggy" xmlns="http://www.w3.org/2000/svg" class="w-100 thinggy" height="100" width="100%" fill="var(--grey)" style=";  transform: scaleX(-1);" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 1e2C20 0 50 0 1e2 1e2z" class="thinggy"></path></svg>';
  } else {
    document.body.innerHTML +=
      '<div class="header">' +
      banner +
      '</div><svg id="thinggy" xmlns="http://www.w3.org/2000/svg" class="w-100 thinggy" height="100" width="100%" fill="var(--theme)"  style=";"" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0C50 1e2 80 1e2 1e2.0z" class="thinggy"></path></svg> <div class="content">' +
      content +
      '</div><svg id="thinggy" xmlns="http://www.w3.org/2000/svg" class="w-100 thinggy" height="100" width="100%" fill="var(--grey)" style=";  transform: scaleX(-1);" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 1e2C20 0 50 0 1e2 1e2z" class="thinggy"></path></svg> ';
  }
  document.body.innerHTML +=
    '<div id="snackbar">Some text some message..</div> <div class="footer"> © 2020-2022 Daniel4-Scratch <br><br> <section> <h3>Useful</h3> <a href="https://github.com/Daniel4-Scratch/website">Repo</a> <br> <a href="https://github.com/Daniel4-Scratch/website">README</a> </section> <section> <h3>Pages</h3> <a href="credits.html">Credits</a> <br> <a href="status.html">Status</a> </section> </div> </body> </html>';

  document.body.innerHTML += '<div class="bg-footer"></div>'



};

/*Website JS*/

function showsnackbar(textinput) {
  document.getElementById("snackbar").innerHTML = textinput;
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className == "navbar") {
    x.className = "navbar responsive";
  } else {
    x.className = "navbar";
  }
}
