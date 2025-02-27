$(function(){
    console.log(window.innerWidth); //瀏覽器寬度

    if(window.innerWidth > 820) {
        //電腦版 常用收件地址/門市 切換tab
        $('.receiving__tab a').click(function(){
            
            var id = $(this).attr('rel');
            $('.receiving__tab a').removeClass('current');
            $(this).addClass('current');
            $('.receiving__pane .receiving__pane__content').removeClass('current');
            $('#'+id).addClass('current');
            return false;
        });
    }
    
    //會員登入/註冊頁 切換tab
    $('.login-way__tab a').click(function(){
        var id = $(this).attr('rel');
        $(this).parent('.login-way__tab').find('a').removeClass('current');
        $(this).addClass('current');
        $(this).parent('.login-way__tab').next('.login-way__pane').find('.login-way__pane__content').removeClass('current');
        $('#'+id).addClass('current');
    });

    //關閉會員任務條
    $('.task-close').click(function(){
        $('.task-box').stop(false, true).slideUp(300);
    });
});

//門市折價券兌換成功彈窗 1秒後自動消失
function exchangeSuccess( id ){
    $('#'+id).stop(false, true).fadeIn(300).delay(1000).fadeOut(300);
}