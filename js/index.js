$(document).ready(function(){

  $('.menu').click(function(){
    $('.navbar').toggle();
    $('.menu .bars').toggleClass('fa-times');
    $('section').toggleClass('nav-toggle');
  });
})


$(window).on('load scroll',function(){
  $('.navbar').hide();
  $('.menu .bars').removeClass('fa-times');
  $('section').removeClass('nav-toggle');
})


var swiper = new Swiper('.swiper-container2', {
  loop:true,
  speed: 600,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


TweenMax.to("#first span,#second span,#third span", 1,{duration:2.5,ease: "sine.out", y:-5,repeat : -1 });

$(".choose").click(function() {
  $(".choose").addClass("active");
  $(".choose > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".wrap").removeClass("active");
  $(".ship").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".wrap > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("one");
  $("#line").removeClass("two");
  $("#line").removeClass("three");
  $("#line").removeClass("four");
})

$(".pay").click(function() {
  $(".pay").addClass("active");
  $(".pay > .icon").addClass("active");
  $(".choose").removeClass("active");
  $(".wrap").removeClass("active");
  $(".ship").removeClass("active");
  $(".choose > .icon").removeClass("active");
  $(".wrap > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("two");
  $("#line").removeClass("one");
  $("#line").removeClass("three");
  $("#line").removeClass("four");
})

$(".wrap").click(function() {
  $(".wrap").addClass("active");
  $(".wrap > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".choose").removeClass("active");
  $(".ship").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".choose > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("three");
  $("#line").removeClass("two");
  $("#line").removeClass("one");
  $("#line").removeClass("four");
})

$(".ship").click(function() {
  $(".ship").addClass("active");
  $(".ship > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".wrap").removeClass("active");
  $(".choose").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".wrap > .icon").removeClass("active");
  $(".choose > .icon").removeClass("active");
  $("#line").addClass("four");
  $("#line").removeClass("two");
  $("#line").removeClass("three");
  $("#line").removeClass("one");
})

$(".choose").click(function() {
  $("#first").addClass("active");
  $("#second").removeClass("active");
  $("#third").removeClass("active");
  $("#fourth").removeClass("active");
})

$(".pay").click(function() {
  $("#first").removeClass("active");
  $("#second").addClass("active");
  $("#third").removeClass("active");
  $("#fourth").removeClass("active");
})

$(".wrap").click(function() {
  $("#first").removeClass("active");
  $("#second").removeClass("active");
  $("#third").addClass("active");
  $("#fourth").removeClass("active");
})

$(".ship").click(function() {
  $("#first").removeClass("active");
  $("#second").removeClass("active");
  $("#third").removeClass("active");
  $("#fourth").addClass("active");
})

var swiper = new Swiper('.swiper-container', {
  // navigation: {
  //   nextEl: '.swiper-button-next4',
  //   prevEl: '.swiper-button-prev4',
  // },
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

TweenMax.to(".box-content span:nth-child(1)", 1,{duration:2.5,ease: "sine.out", y:-5,repeat : -1 });