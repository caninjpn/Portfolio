var x="hi";

function checkWidth() {
<<<<<<< HEAD
/*  if ($(window).width() < 726) {
=======
  if ($(window).width() < 726) {
>>>>>>> eba1cb379e6ef8b794d91807df20dbbd41adaab5
    $('.text-container').insertBefore('.pic-container');
    $('#modal-bg').removeClass('modal-bg');
  } else {
    $('.pic-container').insertBefore('.text-container');
    $('#modal-bg').addClass('modal-bg');
  }
<<<<<<< HEAD
  */

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

function CopyAddress(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

function CopiedAddress(){
  document.getElementById("btnText").innerHTML = '<img src="img/icons/ic_email.png" alt="email" class="contact-icon">Copied';
  setTimeout(function(){
    document.getElementById("btnText").innerHTML = '<img src="img/icons/ic_email.png" alt="email" class="contact-icon">Copy Email';
  },3000);
=======

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

>>>>>>> eba1cb379e6ef8b794d91807df20dbbd41adaab5
}


$(document).ready(function() {  
  $('a').click(function(event) {
<<<<<<< HEAD
    if(typeof event.target.id === "undefined" || event.target.id === ""){
      return;
    }
    else{
      event.preventDefault();  
      $("#modal").toggleClass('modal-hide');
      $("#modal-bg").toggleClass('modal-hide');
      $("#modal-close-circle").toggleClass('modal-hide');
    var id = $(this).data('id'); //$(this).attr('id'); is fine too if you add id to <a>
    var cla = $(this).data('class');
    console.log($(event.target).attr('class'));
=======
    console.log(event.target.id);
    event.preventDefault();  
    $("#modal").toggleClass('modal-hide');
    if ($(window).width() < 726) {
      $("#modal").insertAfter('#tile_'+event.target.id);
    }
    $("#modal-bg").toggleClass('modal-hide');
    $("#modal-close-circle").toggleClass('modal-hide');
    var id = $(this).data('id'); //$(this).attr('id'); is fine too if you add id to <a>
>>>>>>> eba1cb379e6ef8b794d91807df20dbbd41adaab5
    var obj = _objSearcher(id);
    document.getElementById("modal-image").src = obj.image;
    /* $('#modal-image').attr('src', obj.image); // If you want to use jQuery */
    document.getElementById("modal-image2").src = obj.image2;
    /* $('#modal-image').attr('src', obj.image); // If you want to use jQuery */
<<<<<<< HEAD
    document.getElementById("modal-h2").innerHTML = obj.title;
    /* $('#modal-h3').append(obj.title); // If you want to use jQuery */
    document.getElementById("modal-category1").innerHTML = obj.category1;
    /* $('#modal-h3').append(obj.title); // If you want to use jQuery */
    document.getElementById("modal-task").innerHTML = obj.task;
    /* $('#modal-p').append(obj.description); // If you want to use jQuery */
    document.getElementById("modal-category2").innerHTML = obj.category2;
    document.getElementById("modal-process").innerHTML = obj.process;
    /* $('#modal-p').append(obj.description); // If you want to use jQuery */
    document.getElementById("modal-category3").innerHTML = obj.category3;
    document.getElementById("modal-delivery").innerHTML = obj.delivery;
    document.getElementById("modal-link").href = obj.link;
    document.getElementById("modal-link-text").innerHTML = obj.link_text;
    /* $('#modal-p').append(obj.description); // If you want to use jQuery */
  }
});
=======
    document.getElementById("modal-h3").innerHTML = obj.title;
    /* $('#modal-h3').append(obj.title); // If you want to use jQuery */
    document.getElementById("modal-p").innerHTML = obj.description;
    /* $('#modal-p').append(obj.description); // If you want to use jQuery */
  });
>>>>>>> eba1cb379e6ef8b794d91807df20dbbd41adaab5
  
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


<<<<<<< HEAD

//-----------------
  var list = {//BEGIN JSON list of works
    "portfolio_details":[
    {
      "id":"1",
      "title":"Rakuten Gora",
      "image":"img/Gora/01.png",
      "image2":"img/Gora/02.png",
      "category1":"Task",
      "task":"The request brought upon my team was a request to improve the onboarding experience of the Rakuten Gora app",
      "category2":"Process",
      "process":"We first held meetings with the stakeholders to understand what their intentions are for the purpose of improvement. Then my team dove into the Rakuten Gora app to get an understand of what the app's purpose is. Finally, we have looked into the user comments to understand the pains and gains of using the app as well as a comparison of other competitor apps.",
      "category3":"Delivery",
      "delivery":"From the above methods of research we had come to the conclusion that the onboarding app had the following faults: <ul><li>The onboarding had the user go through 7 screens before finally arriving at the main screen of the app</li><li>The onboarding flow lacked the explanation of what the app is capable of and in contrast doesn't present what the unique point is compared to other competitors' apps.</li><li>Users were forced to go through all screens before being able to login and use the app.</ul> From the analysis we reworked the flow to the following <ul><li>From requiring 7 screens to 4 screens to shorten the flow</li><li>We changed the contents to focus on the emphasizing the unique point of the app</li><li>We added Call-to-action buttons to allow users to skip the onboarding if necessary.</li></ul>",
      "link":"",
      "link_text":""
    },
    {
      "id":"2",
      "title":"Rakuten Gateway",
      "image":"img/Gateway.png",
      "image2":"img/Gateway2.png",
      "category1":"Task",
      "task":"Rakuten Gateway is a curation hub where users could discover items in the Rakuten ecosystem. As a part of this service team I was tasked with ways of improving the user experience and incrase cross channel traffic between Rakuten Gateway and other Rakuten services.",
      "category2":"Process",
      "process":"Through this whole project I spoke with the members to get a good understanding of what the business core value is, and looked at their existing persona to understand business intentions. I looked at the website and smartphone applications to personally expereince the service. I did a competitor analysis, as well as looked at other indsutries for references.",
      "category3":"Delivery",
      "delivery":"<ul><li>Short term improvements: I noticed that the items that were introduced in the curation articles were only introduced as a summary at the end of the article. What I had proposed was to created links to the items that was mentioned in the article.</li><li>Long term improvements, I shared the results of the research with the team with a single conclusion: <bold>the business needs a new value proposition</bold>. Through my research I had compared the service to the rest of the Rakuten ecosystem and it came to concern that several other services in Rakuten aleady had its own curation section. The team agreed with what I had came up with and we decided to hold a workshop to restrategize the business. We restrategize rather than acting as a curation site we will become a service where users can act as a central hub to search for items through the Rakuten ecosystem in one location, a feature that was available in the app. We brought the proposal to the stakeholders whom were enthusiastic about it, but they had already decided to hand over the project to another team so we were able to commit to the changes.</li>",
      "link":"https://gateway.rakuten.co.jp/",
      "link_text":"Visit Rakuten Gateway"
    },
    {
      "id":"3",
      "title":"Rakuten PointClub",
      "image":"img/PointClub.png",
      "image2":"",
      "category1":"Task",
      "task":"In Rakuten, there's a membership system where ranks are given based on the amount a user has used a Rakuten service. For each rank there's also some benefits that users can receive. The problem was there seems to be a low activity in the rank information page, which was frequently updated. My team's task was to find a way to increase activity within the page for the users to receive the benefits.",
      "category2":"Process",
      "process":"Initially, we focused on the page specifically to find ways to improve user navigation to seek the benefit that suits them. However, I felt that there were more than what was brought upon us and so I went and reframed the problem, diving deeper to what could possibly lead to a lack of activity in the rank information page, and looked at the channels that redirect users to the rank information page. There I researched and came to a hypothesis: </p><ul><li>There is a possible bias that users may think of it as a static page and therefore, once they had viewed the page once, there's no value in returning to the page once again to check on it despite the page being updated monthly.</li><li>The presence of the rank information section in the main PointClub member's page was poor despite it being the only gateway to redirect users to. Moreover there is no indication of the items being actively updated to encourage users to click into the rank information page.</li></ul><p>With these information, I brought this to the team which they recognized as a solution to help increase activity within the rank information page and I was then tasked with redesigning the rank information section in the PointClub members page.",
      "category3":"Delivery",
      "delivery":"I created the design to emphasize the presence of the rank information section so it will be noticed easily by users. Then to inform users that the rank information page is not just a static information page but also contain benefits I designed to have sample benefits shown in the section as to let users know what type of benefits they could find. Finally to make it known that the rank information page is updated monthly, I added a comment at the top to inform users in addition to adding a ribbon to the benefits that are updated recently.",
      "link":"https://point.rakuten.co.jp/",
      "link_text":"Visit Rakuten Point Club"
    },
    {
      "id":"4",
      "title":"Rakuten Point Gift Card",
      "image":"img/PGC/PGC_full.png",
      "image2":"",
      "category1":"Task",
      "task":"The task was to create a promotion page for Rakuten Point Gift Card to educate users how they could use the gift card aside from the stated use as a gift.",
      "category2":"Process",
      "process":"Upon receiving the specifications I noticed the contents required could also be used on a landing page, something which the original Point Gift Card Landing Page lacked. So I brought up the suggestion to redesign the landing page instead of creating a promotion page, to which the stakeholders accepted. In preparation of the design we compared with competitor gift cards and its website while looking through data to retrieve a general demographics to create a several personas for a better undersatnding of what type of users would buy Point Gift Cards. After creating personas and got a general consensus of whom our target audience is, we proceeded to create scenarios to suggest users what users can use gift cards for: </p> <ul><li>someone who's underage and doesn't have a credit card but wants to purchase items online</li><li>someone whom doesn't trust putting their credit card information on the internet but wants to purchase items online</li><li>users who wants to find a way to restrain them from over-spending on the internet</li><p>and several other types.",
      "category3":"Delivery",
      "delivery":"Once we have finalized on the contents we proceeded to build the UI, where the first view will allow the user to be able to redeeem their gift card points immediately, or in order to understand more he or she can scroll down to learn more about what the Point Gift Card is, what types there are, and the types of uses people could do, before finally providing a list of where the Rakuten Point Gift Card could be found.",
      "link":"https://pointgift.rakuten.co.jp/",
      "link_text":"Visit Rakuten Point Gift Card"
    },
    {
      "id":"5",
      "title":"Rakuten Wallet",
      "image":"img/RWallet.png",
      "image2":"img/RWallet_2.png",
      "category1":"Task",
      "task":"The biggest project that I was tasked with: Start up a new Rakuten service from the ground up.",
      "category2":"Process",
      "process":"We began with defining where to position the new business. We began with collecting data of cryptocurrency market to understand the main demographics of whom actually trade in Cryptocurrency and for what purposes they use for. From there we gather the data to create personas centralizing around two types of users. After creating the personas, I facilitated a workshop with the stakeholders to create ideas of what type of service that we would like this new service to be. After pooling some ideas and aligning with the business unit of the team, we proposed to our stakeholders who had understood our intentions, but they required us to create a proof-of-concept for them to see in order for the plan to be approved. My UI designer and I, the only members of the Design team, as well as two developers created a barebone proof-of-concept app, which was well-received by the stakeholders and the project was approved. From then we began designing the full app. During the design phase we frequently met with the business unit to receive feedback on the design. When the design has been 80% complete I shifted focus to create the Rakuten Wallet website which was completed in 3 months time.",
      "category3":"Delivery",
      "delivery":"The Rakuten Wallet website is now live for pre-registration. The Rakuten Wallet app will be released at a later date in 2019.",
      "link":"https://www.rakuten-wallet.co.jp/",
      "link_text":"Visit Rakuten Wallet"
    },
    {
      "id":"6",
      "title":"Daily UI #001",
      "image":"img/DailyUI/001.png",
      "image2":"",
      "category1":"Challenge",
      "task":"Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.",
      "category2":"Design Point",
      "process":"In this design I wanted to challenge the colour palette: for contrast colours (Blue and Red) how will I be able to balance how to show a red colour while being to blend in with the blue background.",
      "category3":"",
      "delivery":"",
      "link":"",
      "link_text":""
    },{
      "id":"7",
      "title":"Daily UI #002",
      "image":"img/DailyUI/002_01.png",
      "image2":"img/DailyUI/002_02.png",
      "category1":"Challenge",
      "task":"Design a credit card checkout form or page. Don't forget the important elements such as the numbers, dates, security numbers, etc.",
      "category2":"Design Point",
      "process":"While making the application flow, I took up the challenge to design a different type of tracker instead of using a bar to follow the progress of a user. I made the tracker to double as a title section, where at each phase the icon will move from the right to the left, while the tracker label is the title. A second challenge was to design a UI with the main theme colour of red. Red is considered as an intense colour so it's would ",
      "category3":"",
      "delivery":"",
      "link":"",
      "link_text":""
    },{
      "id":"8",
      "title":"Daily UI #003",
      "image":"img/DailyUI/003_01.png",
      "image2":"img/DailyUI/003_02.png",
      "category1":"Challenge",
      "task":"What's the main focus? Is it for a book, an album, a mobile app, a product? Consider important landing page elements (call-to-actions, clarity, etc.)",
      "category2":"Design Point",
      "process":"As one of my works involved with cryptocurrency, I was constrained in terms of creative freedom of how to design the website. Coincidentally, the challenged asked to create a landing pagfe, so I decided to create a cryptocurrency service landing page, but without restraint. The theme of the site is to be casual and welcoming rather than a rigid structure, opening arms to first-time traders in the cryptocurrency market.",
      "category3":"",
      "delivery":"",
      "link":"",
      "link_text":""
    },{
      "id":"9",
      "title":"Daily UI #004",
      "image":"img/DailyUI/004_01.png",
      "image2":"img/DailyUI/004_02.png",
      "category1":"Challenge",
      "task":"What's the main focus? Is it for a book, an album, a mobile app, a product? Consider important landing page elements (call-to-actions, clarity, etc.)",
      "category2":"Design Point",
      "process":"As one of my works involved with cryptocurrency, I was constrained in terms of creative freedom of how to design the website. Coincidentally, the challenged asked to create a landing pagfe, so I decided to create a cryptocurrency service landing page, but without restraint. The theme of the site is to be casual and welcoming rather than a rigid structure, opening arms to first-time traders in the cryptocurrency market.",
      "category3":"",
      "delivery":"",
      "link":"",
      "link_text":""
    },{
      "id":"12",
      "title":"Glow",
      "image":"img/Glow.png",
      "image2":"img/DailyUI/004_02.png",
      "category1":"Assignement",
      "task":"Back in university I took a class focusing on Human-Computer-Interaction. The assignment that was assigned to us was to use natural human motions to control a electronic debice.",
      "category2":"Result",
      "process":"In one week, I focus on the idea to control a light using human hand motion, resulting in Glow. To turn the ball on and off, you roll the ball along the axis with the line; to change color you roll the ball along the axis perpenticular from the line. By rolling the ball you can circulate between several preset colors.",
      "category3":"",
      "delivery":"",
      "link":"http://www.behance.net/kebinwong/",
      "link_text":"Behance - Glow"
    },
=======
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
>>>>>>> eba1cb379e6ef8b794d91807df20dbbd41adaab5
    ]
  }//End JSON