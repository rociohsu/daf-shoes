$(function(){
    console.log(window.innerWidth); //瀏覽器寬度

    if(window.innerWidth > 820) {
        
    }else{
        
    }

    //電腦版 手機版 購物車結帳頁外幣換算開合
    $('.foreign-currency__btn  > a').click(function(){
        $(this).toggleClass('open');
        $(this).parent('.foreign-currency__btn ').next('.pay-group__pane').stop(false, true).slideToggle(300);
    });
});