$(document).ready(function(){

  // $('.promo__burger').bind('click', function() {
  // $(this).toggleClass('active');
  // $(this).find('div').removeClass('no-animation');
  // $(".page-header").toggle();
  //   });



  $('.cakebox-list').slick({
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.sizebox-list').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick'
      }
    ]
  });

    $('.appearbox-list').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

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
