$(".slider").slick({
  slidesToShow: 12,
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  // speed: 900,
  swipe: false,
  cssEase: "linear",
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false
});

$(function() {
  $(window).scroll(function() {
    var $scr_top = $(window).scrollTop();
    if ($scr_top > 100) {
      $("header").css("background-color", "white");
      $(".scr-black").css("color", "black");
      $(".chenge-img").css("display", "none");
      $(".chenge-img3").css("display", "block");
      // $('.src-black').addClass('bottom-black');
      $('.src-black').attr('id', 'bottom-black');
      // $('.bottom-black').css('color', 'red');
    } else {
      $("header").css("background-color", "transparent");
      $(".scr-black").css("color", "white");
      $(".chenge-img").css("display", "block");
      $(".chenge-img3").css("display", "none");
    }
  });
});
