$(document).ready(function(){

  // $('.promo__burger').bind('click', function() {
  // $(this).toggleClass('active');
  // $(this).find('div').removeClass('no-animation');
  // $(".page-header").toggle();
  //   });

$('.cakebox-list').owlCarousel ({
  dots: true,
  center: true,
  nav: false,
  dots: true,
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
  loop:true,
  margin:10,
  responsive : {
      0 : {
          items : 1,

      },
      767 : {
          items : 4,
          loop : false,
          mouseDrag: false,
          autoHeight:false,
      }
  }
});




$(window).resize(function() {
    if ( $(window).width() > 767 ) {
        $('.sizebox-list').removeClass();
        }
    else {
        $('.sizebox-list').addClass();
        }
    });

  // $('.cakebox-list').slick({
  //   dots: false,
  //   arrows: false,
  //   centerMode: true,
  //   variableWidth: true,
  //   infinite: true,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1
  //       }
  //     },
  //     {
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });

  // $('.sizebox-list').slick({
  //   dots: true,
  //   arrows: false,
  //   centerMode: true,
  //   variableWidth: true,
  //   infinite: true,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: 'unslick'
  //     }
  //   ]
  // });

  //   $('.appearbox-list').slick({
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     }
  //   ]
  // });

  // $('.coach-photos__list').slick({
  //   arrows: false,
  //   slidesToShow: 5,
  //   responsive: [
  //     {
  //       breakpoint: 1050,
  //       settings: {
  //         slidesToShow: 4,
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         centerMode: true,
  //         slidesToShow: 1,
  //       }
  //     }
  //   ]
  // });


});
