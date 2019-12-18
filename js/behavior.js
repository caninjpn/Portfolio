document.getElementById("menu_btn").addEventListener("click", showMenu, false);
document.getElementById("link1").addEventListener("click", showMenu, false);

function windowCheck() {
    var h = window.innerHeight;
    $('#intro').css("height", h);
    $('#nav').css("height", h);
    $('.row').css("min-height", h);
    $('#link1').toggle();
}

function showMenu() {
    $('#intro').toggleClass('menu1');
    $('#Designer').toggleClass('menu2', 100, "easeInOutExpo");
    $('#link1').toggle();
    $('#title1').toggle();
    $('#Maker').toggleClass('menu3', 100, "easeInOutExpo");
    $('#Seeker').toggleClass('menu4', 100, "easeInOutExpo");
    $('#Canadian').toggleClass('menu5', 100, "easeInOutExpo");
}