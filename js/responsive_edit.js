var x="hi";

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


var list = {//BEGIN JSON list of works

  "portfolio_details":[

    {
      "title":"Cutter JSON",
      "image":"slide4.jpg",
      "description":"This is about Cutter"
    }
    ,

    {
      "title":"Point Gift Card JSON",
      "image":"aboutbg.jpg",
      "description":"This is about Point Gift Card"
    }
    
    ]
}//End JSON


var obj = JSON.stringify(list);





$('a').click(function(event) {
  console.log(event.target.id);
  event.preventDefault();  
  $("#modal").toggleClass('modal-hide');
  $("#modal-close-circle").toggleClass('modal-hide');
      event.target.id = x;
      document.getElementById("modal-image").src= obj.portfolio_details[x].image;
      document.getElementById("modal-h3").innerHTML= object.portfolio_details[x].title;
      document.getElementById("modal-p").innerHTML="This is about Cutter";
  
});



