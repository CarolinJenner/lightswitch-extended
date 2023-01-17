let btn = document.getElementById("lightswitch");
let body = document.querySelector("body");

function toggleClass() {
  btn.classList.toggle("dark");  
  body.classList.toggle("body-dark");
  toggleTitle();
}

function toggleTitle() {
    document.title === "good morning" ? document.title = "good night" : document.title = "good morning";
}