function checkWidth() {
  if ($(window).width() < 726) {
    $('#proj_txt').addClass('show');
    $('#proj_txt2').addClass('show');
    $('#proj_txt3').addClass('show');
    $('#proj_txt4').addClass('show');
  } else {
    $('#proj_txt').removeClass('show');
    $('#proj_txt2').removeClass('show');
    $('#proj_txt3').removeClass('show');
    $('#proj_txt4').removeClass('show');
  }
}

$(window).resize(checkWidth);

/*detect onclick and hide not clicked, show only $this */

console.log(' this shitty page loaded!');

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.top').addClass('top-white');
    $('.logo').addClass('logo-scroll');
  }
  if ($(this).scrollTop() < 10) {
    $('.top').removeClass('top-white');
    $('.logo').removeClass('logo-scroll');
  }
});

