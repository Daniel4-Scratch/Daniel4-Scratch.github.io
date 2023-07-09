
async function getGa() {
  const response = await fetch("https://api.daniel4scratch.repl.co/ga?id=main");
  const data = await response.text();
  return data;
}

async function start() {
    const ga = await getGa()
    if (ga != ""){
        
        document.getElementById("ga").style.display = "block"
        document.getElementById("ga").innerHTML += ga
}
}

start()

var element = document.getElementById("left");
    var width = element.offsetWidth;
    document.getElementById("ga").style.maxWidth = width - 20 + "px";

window.addEventListener("resize", function() {
    var element = document.getElementById("left");
    var width = element.offsetWidth;
    document.getElementById("ga").style.maxWidth = width - 20 + "px";
  });