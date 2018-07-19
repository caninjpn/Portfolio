var x="hi";

function checkWidth() {
  if ($(window).width() < 726) {
    $('.text-container').insertBefore('.pic-container');
    $('#modal-bg').removeClass('modal-bg');
  } else {
    $('.pic-container').insertBefore('.text-container');
    $('#modal-bg').addClass('modal-bg');
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
    $("#modal-bg").toggleClass('modal-hide');
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
        "title":"Rakuten Point Gift Card Renewal",
        "Services": "<ul><li>User Experience</li><li>Digital Design</"
        "image":"img/PGC/Top_PC.png",
        "image2":"img/PGC/Top_PC.png",
        "description":"The task to create a promotional page for Rakuten Point Gift Card became a task to renew the product's main page after initial analysis with the Customer Journey Map. Through this renewal the aim was to achieve 2 goals: <ol type='1'><li>1) to enrich user knowledge of the Point Gift Card service</li><li>2) connect the customer journey to other services in the Rakuten ecosystem.</li></ol><a href='http://pointgift.rakuten.co.jp/'>Point Gift Card Website</a>"
      },
      {
        "id":"2",
        "title":"Elder Phone",
        "image":"img/Elder/ElderTop.png",
        "image2":"img/CUTTER/SliceDice.png",
        "description":"My mother-in-law has been using a feature phone and is resistive of transitioning to a smart phone. There are phones that had been designed for edlerly people yet she was quite adamant in changing. During the thought, a hypothesis came up of 'what if she's afraid of the user interface?'. Therefore this elder phone UI had been created with the intention to mimic the UI of a feature phone, but on a touch interface."
      }
    ]
  }//End JSON