$(function(){
    console.log(window.innerWidth); //瀏覽器寬度

    /* event-menu change class */
    $('.event-menu > a').click(function() {
        var id = $(this).attr('rel');
        $('.event-menu > a').removeClass('current');
        $(this).addClass('current');
        $('.event-pt').css({'display':'none'});
        $('#'+id).css({'display':'block'});
    });

    /* event-cart open & close */
    $('.event-cart .action-bar').click(function() {
        $('html').toggleClass('no-scroll');
        $(this).parent('.event-cart').toggleClass('open-list');
    });
});