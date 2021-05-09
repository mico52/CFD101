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
	autoplayTimeout:2000,
	autoplayHoverPause:true,
	nav:true,
	responsive:{
			0:{
					items:1
			},
			600:{
					items:2
			},
			1000:{
					items:3
			}
	}
})

// page
$(function()
{
    var pg_links = $('.pg-link'), h_elm = $('#m-pg-link'), curr=5, _this, _class, _id, __this, _num, i=0;

    function changeNumbers(flag)
    {
        if( ((curr > 2) && (flag == 0)) || flag )
        {
            if( curr == 1 )
            {
                curr = 2;
                h_elm.removeClass('left');
                return;
            }

            $(pg_links).each(function()
            { 
                __this = $(this).find('span');
                _num = parseInt(__this.text());

                if(flag)
                    _num += 1;
                else
                    _num -= 1;

                ++i;

                pg_links.addClass('s-hide');
                
                __this.text(_num);
                
                setTimeout(function(){ pg_links.removeClass('s-hide'); },150);

                if( i == 2)
                    curr = _num;

            });
            
            i=0;
        }
        else
        {
            if( (curr == 2) && (flag == 0) )
            {
                curr = 1;
                h_elm.addClass('left');
            }
        }
    }

    function changeLinks()
    {
        _this = $(this);
        _class = _this.attr('class').trim().toLowerCase();

        if( _class == 'arrow' )
        {
            _id = _this.attr('id').trim().toLowerCase();

            if( _id == 'l-arrow' )
                changeNumbers(0);
            else
                changeNumbers(1);
        }
        else
        {
            if( parseInt(_this.text().trim()) < curr )
                changeNumbers(0);
            else
                changeNumbers(1);
        }
    }

    $('.pg-link,.arrow').on('click',changeLinks);
});