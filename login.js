import Login from "./fonction.js";

button = document.getElementById("loginButton")
button.addEventListener("click", TryLogin(document.getElementById('login'),document.getElementById('Password')));

function TryLogin(login,password){
  Good = Login('server mc',login,password)
  console.log(Good)
  if (Good === 'good'){
    window.location = "./main.html"
  }
}