$(function(){
    console.log(window.innerWidth); //瀏覽器寬度

    //電腦版 手機版 當前/原始訂單 切換tab
    $('.order__tab a').click(function(){
        var id = $(this).attr('rel');
        $('.order__tab a').removeClass('current');
        $(this).addClass('current');
        $('.order__pane .order__pane__content').removeClass('current');
        $('#'+id).addClass('current');
    });

    //電腦版 手機版 選擇退貨方式 切換tab
    $('.return__tab a').click(function(){
        var id = $(this).attr('rel');
        $('.return__tab a').removeClass('current');
        $(this).addClass('current');
        $('.return__pane .return__pane__content').removeClass('current');
        $('#'+id).addClass('current');
    });
});