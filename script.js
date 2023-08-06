console.log("Hello there! :)")

document.querySelector(".navbar").innerHTML = `<a href="index.html"><i class="ri-home-2-fill"></i><p>Home</p></a>
      <a href="projects.html"><i class="ri-git-repository-fill"></i><p>Projects</p></a>
      <a href="about.html"><i class="ri-user-fill"></i><p>About</p></a>`

      let keylog = [];
      document.onkeydown = function (e) {
          let keypressed = e.key;
          keylog.push(keypressed);
          if ("necoarc".startsWith(keylog.join(""))) {
              if(keylog.join("") == "necoarc"){
                  window.location.href = "necoarc.html";
              }
          }else{
            keylog=[]
        }
      };