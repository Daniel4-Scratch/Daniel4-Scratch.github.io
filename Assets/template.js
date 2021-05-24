var donotdisturb = false;
var template = function(name, body) {
  document.body.innerHTML = '<style>  input {    display: block; margin: 10px;    margin-bottom: 10px;    padding: 5px;    width: 100%;    border: 1px solid lightgrey;    border-radius: 3px;    font-size: 16px;  }  a {    color: blue;    cursor: default;  }  a:hover {    color: lime;  }  b {    background-color: #feffd1;  }  body {    background-color: red; /* For browsers that do not support gradients */    background-image: linear-gradient(#f5f5f5, white);    /*#fafafa*/    margin: 0;  }  .footer {    position: fixed;    left: 0;    bottom: 0;    background-color: #2b2b2b;    color: white;    width: 100%;    text-align: center;  }  .footer a {    color: white;  }  .footer a:hover {    color: pink;  }  #grad {    background-image: linear-gradient(to bottom right, #1ec1fc, #1e86fc);    color: #fff;    display: flex;    flex-direction: row;    align-content: center;    justify-content: center;    padding: 20px 10px;    font-weight: 1000;    font-size: 25px;  }  div.p {    font-size: 20px;  } h1 a {color:white; text-decoration: none;} a:hover {color:white; cursor:pointer;}</style> <div id="grad">  <h1><a href="index">Daniel4-Scratch</h1></a></div><div class="p">' + 
    body + '</div><title>' +
    name + ' | Daniel4-Scratch</title>'
  document.body.innerHTML += '<div class="footer">  <p>    © Daniel4-Scratch 2021 <br />    <a href="Https://github.com/Daniel4-Scratch">Github</a> |    <a href="Https://glitch.com/@db4">Glitch</a>  </p></div>';
  
  if (donotdisturb) {
    document.body.innerHTML =
      "Sever down until next month.";
  }
};
