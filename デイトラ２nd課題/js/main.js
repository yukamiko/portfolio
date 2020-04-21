var swiper = new Swiper('.swiper-container', {
    // ここからはオプションです。
// navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
// }
slidesPerView: 3,
loop: true,
pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
}
});

$(function() {
    $('.section6-item').click(function() {

        var $answer = $(this).find('.answer');
        var $plus = $(this).find('.plus');
        var $minus = $(this).find('.minus');




        if ($answer.hasClass('open')){

            $answer.removeClass('open');
            $answer.slideUp();
            $minus.css('display', 'none');
            $plus.css('display', 'block');

        }else {

            $answer.addClass('open');
            $answer.slideDown();
            $minus.css('display', 'block');
            $plus.css('display', 'none');
        }
    });
});

// $(function() {
//     $('#bars').click(function() {
//         $('#header-nav').css('display', 'none');
//         $('#reponsive-nav-wrap').css('display', 'block');
//     });

//     $('#batsu').click(function() {
//         $('#header-nav').css('display', 'block');
//         $('#reponsive-nav-wrap').css('display', 'none');
//     });
// });

// $(function() {
//     $('#bars').click(function() {
//         $('#header-nav').css('display', 'none');
//         $('#reponsive-nav-wrap').css('display', 'block');

//         $('#responsive-nav-wrap').addClass('left-slide');
//     });

//     $('#batsu').click(function() {
//         $('#header-nav').css('display', 'block');
//         $('#reponsive-nav-wrap').css('display', 'none');
//         $('#responsive-nav-wrap').addClass('right-slide');

//     });
// });

// $(function() {
//     $('#bars').on('click', function() {
//         if($(this).hasClass('active')) {
//             $(this).removeClass('active');
//             $('#reponsive-nav-wrap').removeClass('open');
//         }else {
//             $(this).addClass('active');
//             $('#reponsive-nav-wrap').addClass('open');

//         }
//     });
// });

$(function() {
    // $('#bars').click(function() {
    //  $('#reponsive-nav-wrap').addClass('opens');

    // })

    var $topbutton = $('.scrol-top-box');
    $topbutton.hide();

    $(window).scroll( () => {
        if ($(this).scrollTop() > 400) {
            $topbutton.fadeIn();
        }else {
            $topbutton.fadeOut();
        }
    });

    $topbutton.click( () => {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
        return false
    });
});

$(function(){
    $('a[href*="#"].anchor-link').on('click',function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });