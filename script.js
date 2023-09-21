let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");
let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    moon.style.top = value * .8 + "px";
    text.style.top = 85 + value * -0.2 + '%';
    train.style.left = value * 1.5 + "px";
    man.style.left = value * .6 + "px";
    desert_moon.style.top = value * .3 + "px";

})