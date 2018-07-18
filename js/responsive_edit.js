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



$(document).ready(function() {  
  $('a').click(function(event) {
    console.log(event.target.id);
    event.preventDefault();  
    $("#modal").toggleClass('modal-hide');
    $("#modal-close-circle").toggleClass('modal-hide');
    var id = $(this).data('id'); //$(this).attr('id'); is fine too if you add id to <a>
    var obj = _objSearcher(id);
    document.getElementById("modal-image").src = obj.image;
    /* $('#modal-image').attr('src', obj.image); // If you want to use jQuery */
    document.getElementById("modal-image2").src = obj.image2;
    /* $('#modal-image').attr('src', obj.image); // If you want to use jQuery */
    document.getElementById("modal-h3").innerHTML = obj.title;
    /* $('#modal-h3').append(obj.title); // If you want to use jQuery */
    document.getElementById("modal-p").innerHTML = obj.description;
    /* $('#modal-p').append(obj.description); // If you want to use jQuery */
  });
  
  // Function to search the matching "JSON" object by id
  function _objSearcher(_id) {
    for (var i = 0; i < list.portfolio_details.length; i++) {
      if (list.portfolio_details[i].id == _id) {
        return list.portfolio_details[i];
      }
    }
    return null;
  }
});


//-----------------
  var list = {//BEGIN JSON list of works
    "portfolio_details":[
      {
        "id":"1",
        "title":"Cutter JSON",
        "image":"img/CUTTER/SliceDice.png",
        "image2":"img/CUTTER/SliceDice.png",
        "description":"This is about Cutter"
      },
      {
        "id":"2",
        "title":"Point Gift Card JSON",
        "image":"img/PGC/Top_PC.png",
        "image2":"img/CUTTER/SliceDice.png",
        "description":"This is about Point Gift Card"
      }
    ]
  }//End JSON