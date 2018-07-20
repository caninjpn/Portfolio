var x="hi";

function checkWidth() {
  if ($(window).width() < 726) {
    $('.text-container').insertBefore('.pic-container');
    $('#modal-bg').removeClass('modal-bg');
  } else {
    $('.pic-container').insertBefore('.text-container');
    $('#modal-bg').addClass('modal-bg');
  }

$(window).resize(checkWidth);

 var loc;
$(window).scroll(function () {
  if ( loc > $(this).scrollTop()) {
    $('.top').css("top", '-75px');
  }
  if (loc< $(this).scrollTop() && loc > 194) {
    $('.top').css("top", '-220px');
  }

  if ($(this).scrollTop() < 194) {
    $('.top').css("top", '0px');
  }

  loc = $(this).scrollTop();
});

}


$(document).ready(function() {  
  $('a').click(function(event) {
    console.log(event.target.id);
    event.preventDefault();  
    $("#modal").toggleClass('modal-hide');
    if ($(window).width() < 726) {
      $("#modal").insertAfter('#tile_'+event.target.id);
    }
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
        "Services": "<ul><li>User Experience</li><li>Digital Design</li>",
        "image":"img/PGC/Top_PC.png",
        "image2":"img/PGC/Top_PC.png",
        "description":"The task to create a promotional page for Rakuten Point Gift Card became a task to renew the product's main page after initial analysis with the Customer Journey Map. Through this renewal the aim was to achieve 2 goals: <ol type='1'><li>1) to enrich user knowledge of the Point Gift Card service</li><li>2) connect the customer journey to other services in the Rakuten ecosystem.</li></ol><a href='http://pointgift.rakuten.co.jp/'>Point Gift Card Website</a>"
      },
      {
        "id":"2",
        "title":"Feature Smartphone UI",
        "Services": "<ul><li>User Experience</li><li>App UI</li>",
        "image":"img/Elder/ElderTop.png",
        "image2":"img/CUTTER/SliceDice.png",
        "description":"My mother-in-law has been using a feature phone and is adamant of transitioning to a smart phone. There are phones that had been designed for edlerly people yet she remained unwilling to change. As a result, a hypothesis came of 'what if she's afraid of not getting used to the interface?'. The Feature Smartphone UI has been created with the intention to mimic the UI of a feature phone, but on a touch interface for a intermediary transition from a feature phone to a smartphone."
      },
      {
        "id":"3",
        "title":"DLM+",
        "Services": "<ul><li>User Experience</li><li>Digital Design</li>",
        "image":"img/Elder/ElderTop.png",
        "image2":"img/CUTTER/SliceDice.png",
        "description":"A dashboard to manage sign ups/participation of projects for a user. DLM+ allows users to view at a glance projects which they could sign up and cancel if necessary."
      },
      {
        "id":"3",
        "title":"6 J&#333; Room Case Study",
        "Services": "<ul><li>User Experience</li><li>Spatial Design</li><li>Physical mockup</li>",
        "image":"img/Elder/ElderTop.png",
        "image2":"img/CUTTER/SliceDice.png",
        "description":"Many bachelor/bachlorettes in Japan live in rooms roughly the size of 10m<sup>2</sup>. With the inability to renovate, this case study is to use furnitures and "
      }
    ]
  }//End JSON