$(document).ready(function(){

  $('.popup').hide();

  $('.promo__burger').on('click', function() {
  $('.main-nav').toggleClass('.active');
  $('.main-nav').toggle();
    });

$('.cakebox-list').owlCarousel ({
  dots: true,
  center: true,
  nav: false,
  responsive : {
    0 : {
        items : 1,
    },
    767 : {
        items : 1,
        dots: false,
        nav: true,
        navText: ["<img src='img/icons/left-icon.svg'>", "<img src='img/icons/right-icon.svg'>"],
    }
  }
});

$('.sizebox-list').owlCarousel ({
  loop: true,
  responsive : {
      0 : {
          items : 1,
      },
      // 767 : {
      //     items : 4,
      //     loop : false,
      //     mouseDrag: false,
      // }
  }
});

$('.appearbox-list').owlCarousel ({
  loop: true,
  margin: 10,
  responsive : {
      0 : {
          items : 1,
      },
      767 : {
          items : 2,
          dots: false,
          nav: true,
          navText: ["<img src='img/icons/left-icon.svg'>", "<img src='img/icons/right-icon.svg'>"],
      }
  }
});

$('.reviews__list').owlCarousel ({
  loop: true,
  dots: true,
  responsive : {
      0 : {
          items : 1,
      },
      950 : {
          items : 1,
          dots: false,
          nav: true,
          navText: ["<img src='img/icons/left-icon.svg'>", "<img src='img/icons/right-icon.svg'>"],
      }
  }
});


  $('cakebox-block__btn1').on('click', function() {
    alert('yess');
    // $('choice-cakebox').text(('cakebox-block__title1').text());
  });


$(window).width(function() {
    if ($(window).width() > 767) {
      $('.sizebox-list').trigger('destroy.owl.carousel');
    }
    else {
      return false;
    }
    });



  $('.final-order__btn').on('click', function() {
    $('.popup').fadeIn(500);
  });

  $('.popup-cancel__btn').on('click', function() {
    $('.popup').fadeOut(500);
  });

$(function($){
  $("#phone").mask("(999) 999-9999");
});








});
