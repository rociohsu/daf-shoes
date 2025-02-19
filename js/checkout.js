$(function(){
    //電腦版 手機版 購物車結帳頁外幣換算開合
    $('.foreign-currency__btn  > a').click(function(){
        $(this).toggleClass('open');
        $(this).parent('.foreign-currency__btn ').next('.pay-group__pane').stop(false, true).slideToggle(300);
    });
});

//關閉popup彈窗
function nextPayment(){
    $('.popup-theme').stop(false, true).fadeOut(300);
    $('#payment-option').stop(false, true).fadeIn(300);
}