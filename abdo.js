let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let moutains3 = document.getElementById("moutains3");
let moutains4 = document.getElementById("moutains4");
let river5 = document.getElementById("river");
let boat6 = document.getElementById("boat");

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px";
    moutains3.style.top = value * 2 + "px";
    moutains4.style.top = value * 1.5 + "px";
    river5.style.top = value * 1.5 + "px";
    boat6.style.top = value * 1.5 + "px"
    boat6.style.left = value * 3 + "px"
    if (scrollY >= 127) {
        document.querySelector(".main").style.background = "#00a2ffff";
    }
   
}