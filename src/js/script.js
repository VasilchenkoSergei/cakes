$(document).ready(function(){

  // $('.promo__burger').bind('click', function() {
  // $(this).toggleClass('active');
  // $(this).find('div').removeClass('no-animation');
  // $(".page-header").toggle();
  //   });



$('.cakebox-list').owlCarousel({
    loop:true,
    center:true,
    margin:10,
    items: 1
});

$('.sizebox-list').owlCarousel({
    // loop:true,
    center:true,
    margin:10,
    items: 1,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1200:{
            items:5
        }
    }
});



  // $('.cakebox-list').slick({
  //   dots: true,
  //   arrows: false,
  //   centerMode: true,
  //   variableWidth: true,
  //   infinite: true,
  //   slidesToShow: 1,
  // });

  // $('.sizebox-list').slick({
  //   dots: true,
  //   arrows: false,
  //   centerMode: true,
  //   variableWidth: true,
  //   infinite: true,
  //   slidesToShow: 1,
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
