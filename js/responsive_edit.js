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
  var newImg = "img/logo_black.png";
  var newImg2 = "img/logo_black.png";
$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
    $('.logo').addClass('logo-scroll');
    $('.logo').attr('src', newImg);
    $('h1').addClass('h1-scroll');
  }
  if ($(this).scrollTop() < 250) {
    $('.logo').removeClass('logo-scroll');
    $('.logo').attr('src', newImg2);
    $('h1').removeClass('h1-scroll');
  }
  if ($(this).scrollTop() >= 337) {
    $('.top').addClass('top-show');
  }
  if ($(this).scrollTop() < 337) {
    $('.top').removeClass('top-show');
  }
});

$('#cutter-btn').click(function() {
  console.log('cutter pressed');  
document.getElementById("Cutter").addClass('modal-show');
document.getElementById("Cutter").removeClass('modal-hide');
});