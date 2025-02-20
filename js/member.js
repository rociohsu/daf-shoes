$(function(){
    console.log(window.innerWidth); //瀏覽器寬度

    if(window.innerWidth > 820) {
        
    }else{
        
    }

    //會員登入/註冊頁 切換tab
    $('.login-way__tab a').click(function(){
        var id = $(this).attr('rel');
        $(this).parent('.login-way__tab').find('a').removeClass('current');
        $(this).addClass('current');
        $(this).parent('.login-way__tab').next('.login-way__pane').find('.login-way__pane__content').removeClass('current');
        $('#'+id).addClass('current');
    });
});