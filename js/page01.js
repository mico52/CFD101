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





function get_italy_time() {
	var d = new Date();
	var localTime = d.getTime();
	var localOffset = d.getTimezoneOffset() * 60000;
	var utc = localTime + localOffset;
	var offset = +2;
	var italy = utc + (3600000 * offset);
	var nd = new Date(italy);
	var hour = nd.getHours();
	
	if(hour > 12) {
		hour = hour - 12;
	}
	
	if(hour == 0) {
		hour = 12;
	}
	
	var minutes = nd.getMinutes();
	
	if(minutes < 10) {
		minutes = "0" + minutes
	}
	
	var date = nd.getDate();
	
	$('#italy_time .h_time').html(hour + ':' + minutes + ' ');
	if(nd.getHours() > 11) {
		$('#italy_time .h_time').append('PM');
	} else {
		$('#italy_time .h_time').append('AM');
	}
	
	var monthNames = ["January", "February", 
  "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	
	$('#italy_time .h_location').html('Hawai&#699;i Time');
	$('#italy_time .h_date').html(date);
}
function get_local_time() {
	var local_time = new Date();
	var hour = local_time.getHours();
	
	if(hour > 12) {
		hour = hour - 12;
	}
	
	if(hour == 0) {
		hour = 12;
	}
	
	var minutes = local_time.getMinutes();
	
	if(minutes < 10) {
		minutes = "0" + minutes
	}
	
	var date = local_time.getDate();
	$('#italy_time .h_time').html(hour + ':' + minutes + ' ');
	
	if(local_time.getHours() > 11) {
		$('#italy_time .h_time').append('PM');
	} else {
		$('#italy_time .h_time').append('AM');
	}
	
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	
	$('#italy_time .h_location').html('Local Time');
	$('#italy_time .h_date').html(date);
}

get_italy_time();
setInterval(function() {
	get_italy_time();
}, 15000)

// $('#italy_time').hover(function() {
// 	get_local_time()
// }, function() {
// 	get_italy_time();
// });





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
    pagination: {
      el: ".swiper-pagination",
    },
  });
