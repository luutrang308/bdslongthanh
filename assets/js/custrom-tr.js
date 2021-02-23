$(document).ready(function() {
	new WOW().init();

  $('.section_slider').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
    lazyLoad: 'ondemand',
  });

  $('.element_donviphanphoi').slick({
    dots: false,
    slidesToShow: 4,
    autoplay: false,
    arrows: false,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
  $('.toggle_menu').click(function() {
    $('.section_header').toggleClass('section_header_fixed');
  });


  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('.section_header').removeClass('section_header_fixed');

    } else {
      $('.section_header').addClass('section_header_fixed');
    }
  });

  $('.element_tongquanduan').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.img_tongquanduan'
  });
  $('.img_tongquanduan').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.element_tongquanduan',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    dots: false,
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
        $('.top-up').fadeIn();
    } else {
        $('.top-up').fadeOut();
    }
  });
  $('.top-up').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });
    
});

var widthpage = $(window).width();
if (widthpage <= 1560) {
  $('.container').removeClass('container_fluid');
}

var widthpage = $(window).width();
if (widthpage <= 570) {
  $('.section_header').removeClass('section_header_fixed');

  /*$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      

    } else {
      $('.section_header').removeClass('section_header_fixed');
    }
  });*/

}

$('.submenu_mobi').click(function(){
  $('.section_header').toggleClass('section_header_fixed_mobi');
});