$(function(){
    console.log(window.innerWidth); //瀏覽器寬度

    if(window.innerWidth > 820) {
        
    }else{
        
    }

    //會員登入/註冊頁 切換tab
    $('.login-way__tab a').click(function(){
        var id = $(this).attr('rel');
        $('.login-way__tab a').removeClass('current');
        $(this).addClass('current');
        $('.login-way__pane > div').removeClass('current');
        $('#'+id).addClass('current');
    });
});