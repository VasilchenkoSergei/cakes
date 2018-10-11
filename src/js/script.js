$(document).ready(function(){

$('.popup').hide();

$('.promo__burger').on('click', function() {
  $('.main-nav').toggleClass('.active');
  $('.main-nav').toggle();
});


// !!!!!!!!!!!!!!SLIDER!!!!!!!!!!!!!!!!!!!!


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

$(window).width(function() {
  if ($(window).width() > 767) {
    $('.sizebox-list').trigger('destroy.owl.carousel');
  }
  else {
    return false;
  }
});

// !!!!!!!!!!POPUP!!!!!!!!!!!!!

$('.final-order__btn').on('click', function() {
  $('.popup').fadeIn(500);
});

$('.popup-cancel__btn').on('click', function() {
  $('.popup').fadeOut(500);
});

// !!!!!!!!!!МАСКА ДЛЯ ВВОАД ТЕЛЕФОНА!!!!!!!!!!!!

$(function($){
  $("#phone").mask("(999) 999-9999");
});

$('.cakebox-block__btn').on('click', function() {
  $('.choice-cakebox').text($(this).prev('.cakebox-block').children('.cakebox-block__title').text().split('(')[0]);
});


$('.personal-sizebox').on('click', function() {
  $('.choice-sizebox').text($(this).children('.personal-sizebox__title').text().split('(')[0]);
});

$('.personal-sizebox__btn').on('click', function() {
  $('.choice-sizebox').text($(this).prev('.personal-sizebox').children('.personal-sizebox__title').text().split('(')[0]);
});


$('.personal-appearbox').on('click', function() {
  $('.choice-appearbox').text($(this).children('.personal-appearbox__title').text().split('(')[0]);
});

$('.personal-appearbox__btn').on('click', function() {
  $('.choice-appearbox').text($(this).prev('.personal-appearbox').prev('.personal-appearbox').children('.personal-appearbox__title').text().split('(')[0]);
});

// !!!!!!!!!!!!!!!!VISITED LINKS!!!!!!!!!!!!

$('.main-nav__link').on('click', function() {
  $(this).css({'color':'blue'});
});


// !!!!!!!!!!!!!!ITEM CHOICE!!!!!!!!!!!!!!!!!!!!!!!

$('.personal-sizebox', 'personal-appearbox').on('click', function() {
  if ($(this).attr('click-state') == 1) {
    $(this).attr('click-state', 0)
    $(this).css({'box-shadow':'0 0 7px 2px transparent'});
  } else {
    $(this).attr('click-state', 1)
    $(this).css({'box-shadow':'0 0 7px 2px #f50049'});
  }
});








// $(document).on('click', '.main-nav__link', function() {
//   $(this).addClass('main-nav__link--active').siblings().removeClass('main-nav__link--active');
// });








});
