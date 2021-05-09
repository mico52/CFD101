$(document).ready(function(){

  $('.menu').click(function(){
    $('.navbar').toggle();
    $('.menu .fa-bars').toggleClass('fa-times');
    $('section').toggleClass('nav-toggle');
  });
})


$(window).on('load scroll',function(){
  $('.navbar').hide();
  $('.menu .fa-bars').removeClass('fa-times');
  $('section').removeClass('nav-toggle');
})


$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:2500,
  dots:false,
  nav:true,
  navText:[$('.owl-nav-prev'),$('.owl-nav-next')],
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          // nav:true
      },
      600:{
          items:2,
          // nav:false
      },
      1000:{
          items:3,
          // nav:true,
          // loop:false
      }
  }
})


