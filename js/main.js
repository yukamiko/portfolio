$(function() {
    $('.menu-toggle').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('nav').removeClass('open');
            $('.over').removeClass('open');
        }else {
            $(this).addClass('active');
            $('nav').addClass('open');
            $('.over').addClass('open');
        }
    });
});