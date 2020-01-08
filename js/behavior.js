window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

    window.requestAnimationFrame(updateLax)
    this.windowCheck();
}

document.getElementById("menu_btn").addEventListener("click", showMenu, false);

function windowCheck() {
    var h = window.innerHeight;
    $('#intro').css("height", h);
    $('#nav').css("height", h);
   $('.row').css("min-height", h);
}

function showMenu() {
    $('#Menu').animate({
        top: 0
    }, 1000, function (animatemenu) {});
}

function animatemenu(){
    $('#menu1').animate({
        top: 0
    }, 2000, function () {});
}