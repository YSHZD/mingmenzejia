$(function() {
    $('.ko').on('click',function(){
        $('body').append('<div class="fix_top"><img src="images/wx.jpg"/><span class="close">x</span></div>');
    });
    $(document).on("click", ".close", function(){ 
    $('.close').hide(1000);
    $('.fix_top').hide(1000);})

var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect : 'fade',
		    loop:true,
        speed:2000,
        autoplayDisableOnInteraction : false,
        autoplay: 2000,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
// $('.band_item').hover(function(){
//     $(this).find($('div')).animate({top:"0"})
// },function(){
//      $(this).find($('div')).animate({top:"-268px"})
// });


/*$('.swiper-wrapper').hover(
  function(){mySwiper.stopAutoplay();},
  function(){mySwiper.startAutoplay();}
);*/
     
}) ;