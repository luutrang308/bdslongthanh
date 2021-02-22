$(document).ready(function() {
	new WOW().init();

  $('.section_slider').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('.section_header').removeClass('section_header_fixed');
    } else {
      $('.section_header').addClass('section_header_fixed');
    }
  });
    
});
