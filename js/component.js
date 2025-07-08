$(function(){
    console.log(window.innerWidth); //瀏覽器寬度

    //網頁滾動高度超過1000才顯示top-btn至頂按鈕
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $('.top-btn').stop(false, true).fadeIn(300);
        }else{
            $('.top-btn').stop(false, true).fadeOut(300);
        }
    });
    
    if(window.innerWidth > 820) {
        //header 全部商品.hover 展開下拉選單
        $('.header__menu .pt-all').hover(
            function() {
                $('.header__hover-menu').stop(false, true).slideDown(300);
            }, function() {
                $('.header__hover-menu').stop(false, true).slideUp(300);
            }
        );
        $('.header__hover-menu').hover(
            function() {
                $(this).stop(false, true).show(0);
            }, function() {
                $(this).stop(false, true).slideUp(600);
            }
        );

        //header 會員icon.hover 展開會員下拉選單
        $('.header__syslink__member').hover(
            function() {
                $('.member-hover-menu').stop(false, true).slideDown(300);
            }, function() {
                $('.member-hover-menu').stop(false, true).slideUp(300);
            }
        );
        $('.member-hover-menu').hover(
            function() {
                $(this).stop(false, true).show(0);
            }, function() {
                $(this).stop(false, true).slideUp(600);
            }
        );

        //header 購物車icon.hover 展開購物車下拉選單
        $('.header__syslink__cart').hover(
            function() {
                $('.cart-hover-menu').stop(false, true).slideDown(300);
            }, function() {
                $('.cart-hover-menu').stop(false, true).slideUp(300);
            }
        );
        $('.cart-hover-menu').hover(
            function() {
                $(this).stop(false, true).show(0);
            }, function() {
                $(this).stop(false, true).slideUp(300);
            }
        );

        //電腦版 打開選擇尺寸跳窗
        $('.pt-item .add-btn').click(function(){
            $('.header').addClass('no-sticky');
            $('.size-select').stop(false, true).fadeOut(0);
            $(this).closest('.pt-item').find('.size-select').stop(false, true).fadeIn(300);
        });
        $('.size-select__bg, .size-select .btn-close').click(function(){
            $('.header').removeClass('no-sticky');
            $(this).closest('.size-select').stop(false, true).fadeOut(300);
        });
    }else {
        //手機版 menu.click 展開左側選單 
        $('.header__syslink__menu').click(function(){
            $('html').addClass('no-scroll');
            $('.header__hover-menu').stop(false, true).fadeIn(0).animate({right:'0'});
        });
        $('.header__hover-menu .btn-close').click(function(){
            $('html').removeClass('no-scroll');
            $('.header__hover-menu').stop(false, true).animate({right:'-100dvw'}).fadeOut(0);
        });

        //手機版 關掉 下載APP top-bar
        $('.download-app .btn-close').click(function(){
            $('.download-app').stop(false, true).slideUp(100);
        });

        //手機版 打開選擇尺寸跳窗
        $('.pt-item .add-btn').click(function(){
            $('.header').addClass('no-sticky');
            $('html').addClass('no-scroll');
            $('.size-select').stop(false, true).fadeOut(0);
            $('.top-btn').stop(false, true).fadeOut(0);
            $(this).closest('.pt-item').find('.size-select').stop(false, true).fadeIn(300);
        });
        $('.size-select__bg, .size-select .btn-close').click(function(){
            $('.header').removeClass('no-sticky');
            $('html').removeClass('no-scroll');
            $(this).closest('.size-select').stop(false, true).fadeOut(300);
        });
    }

    //電腦版&手機版 打開搜尋頁  
    $('.header__syslink__search').click(function(){
        $('html').addClass('no-scroll');
        $('.search-page').stop(false, true).fadeIn(0).animate({right:'0'});
    });
    $('.search-page .btn-close').click(function(){
        $('html').removeClass('no-scroll');
        $('.search-page').stop(false, true).animate({right:'-100dvw'}).fadeOut(0);
    });

    //電腦版&手機版 popup彈窗開關
    /* open popup */
    $('a.popup').click(function(){
        var id = $(this).attr('rel');
        $('#'+id).stop(false, true).fadeIn(300);
    });

    /* close popup */
    $('.popup-theme .overlay-bg, .popup-theme .btn-close').click(function() {
        $(this).closest('.popup-theme').stop(false, true).fadeOut(300);
    });

    //加入購物車成功彈窗 1秒後自動消失
    $('.size-select__option > a:not(.state--sold-out)').click(function(){;
        $('.header').removeClass('no-sticky');
        $('html').removeClass('no-scroll');
        var id = $(this).attr('rel');
        $('#'+id).stop(false, true).fadeIn(300).delay(1000).fadeOut(300);
        $(this).closest('.size-select').stop(false, true).fadeOut(0);
    });

    //電腦版&手機版 pageSet自訂頁面 打開選擇尺寸跳窗
    $('.addCartPs').click(function(){
        $('.size-select-center').stop(false, true).fadeIn(300);
    });
});

//關閉popup彈窗
function closePopup(){
    $('.popup-theme').stop(false, true).fadeOut(300);
}

//加入購物車成功彈窗 1秒後自動消失
function addtoCart( id ){
    $('.header').removeClass('no-sticky');
    $('html').removeClass('no-scroll');
    $('#'+id).stop(false, true).fadeIn(300).delay(1000).fadeOut(300);
    $('.size-select').stop(false, true).fadeOut(0);
}