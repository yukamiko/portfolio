$(".slider").slick({
  // dotsClass: 'dots',
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   variableWidth: true
  //   autoplay: true,

  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
  slidesToShow: 4,
  centerMode: true,
  centerPadding: "100px",
  focusOnSelect: true


});

$(function() {
  $('.header-menu').hide().fadeIn(1000);

  $('.header-wrapper h2').animate({paddingTop: '50px'},{duration: 2000, queue: false}).animate({opacity: 1},{duration: 2000, queue: false});
  $('.header-wrapper p').animate({paddingBottom: '50px'},{duration: 2000, queue: false}).animate({opacity: 1},{duration: 2000, queue: false});
  $('.header-wrapper p').animate({marginTop: 0},{duration: 2000, queue: false}).animate({opacity: 1},{duration: 2000, queue: false});
  $('.header-button-box a').animate({marginTop: 0},{duration: 2000, queue: false}).animate({opacity: 1},{duration: 2000, queue: false});
  // $('header-button-box a').animate({marginBottom: '50px'},{duration: 2000, queue: false}).animate({opacity: 1},{duration: 2000, queue: false});

  // $('#categ1').mouseover(function(){
    // $('.categores').addClass('.g');
    // $('.categores').hide();

  // });

  $('#categ1').hover(
    function() {
      // $('#categ1').fadeOut();
      $('.cat-box').slideDown();

    },
    function() {
      // $('#categ1').fadeIn();
      $('.cat-box').slideUp();
    }
  );

  
});
