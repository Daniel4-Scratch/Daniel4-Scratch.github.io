console.log("Hello there! :)")

document.querySelector(".navbar").innerHTML = `<a href="index.html"><i class="ri-home-2-fill"></i><p>Home</p></a>
      <a href="portfolio.html"><i class="ri-git-repository-fill"></i><p>Portfolio</p></a>
      <a href="blog.html"><i class="ri-article-fill"></i><p>Blog</p></a>`


// Autism
let keylog = [];
document.onkeydown = function (e) {
    let keypressed = e.key;
    keylog.push(keypressed);
    if ("lobster".startsWith(keylog.join(""))) {
        if (keylog.join("") == "lobster") {
            window.location.href = "lobster.html";
        }
    } else {
        keylog = []
    }
};