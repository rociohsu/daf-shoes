$(function(){
    console.log(window.innerWidth); //瀏覽器寬度

    promotionsResize();
    $(window).resize(function(){
        promotionsResize();
    });

    /* event-menu change class */
    $('.event-menu > a').click(function() {
        var id = $(this).attr('rel');
        $('.event-menu > a').removeClass('current');
        $(this).addClass('current');
        $('.event-pt').css({'display':'none'});
        $('#'+id).css({'display':'block'});
    });
});

//電腦版/手機版分別調用js
function promotionsResize(){
    if(window.innerWidth > 820) {
        /* event-cart open & close 電腦版 */
        $('.event-cart .action-bar').click(function() {
            $(this).parent('.event-cart').toggleClass('open-list');
        });
    } else {
        /* event-cart open & close 手機版 */
        $('.event-cart .action-bar').click(function() {
            $('html').toggleClass('no-scroll');
            $(this).parent('.event-cart').toggleClass('open-list');
        });
    }
}