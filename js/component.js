$(function(){
    console.log(window.innerWidth); //瀏覽器寬度
    
    if(window.innerWidth > 820) {
        //header 全部商品.hover 展開下拉選單
        $('.header__menu .pt-all').hover(
            function() {
                $('.header__hover-menu').stop(false, true).slideDown(300);
            }, function() {
                $('.header__hover-menu').stop(false, true).slideUp(600);
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
                $('.member-hover-menu').stop(false, true).slideUp(600);
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
                $('.cart-hover-menu').stop(false, true).slideUp(600);
            }
        );
        $('.cart-hover-menu').hover(
            function() {
                $(this).stop(false, true).show(0);
            }, function() {
                $(this).stop(false, true).slideUp(600);
            }
        );
    }else {
        //手機版 menu.click 展開左側選單 
        $('.header__syslink__menu').click(function(){
            $('body').addClass('no-scroll');
            $('.header__hover-menu').stop(false, true).fadeIn(0).animate({right:'0'});
        });
        $('.header__hover-menu .btn-close').click(function(){
            $('body').removeClass('no-scroll');
            $('.header__hover-menu').stop(false, true).animate({right:'-100dvw'}).fadeOut(0);
        });

        //手機版 關掉 下載APP top-bar
        $('.download-app .btn-close').click(function(){
            $('.download-app').stop(false, true).slideUp(100);
        });
    }

    //電腦版&手機版 打開搜尋頁  
    $('.header__syslink__search').click(function(){
        $('body').addClass('no-scroll');
        $('.search-page').stop(false, true).fadeIn(0).animate({right:'0'});
    });
    $('.search-page .btn-close').click(function(){
        $('body').removeClass('no-scroll');
        $('.search-page').stop(false, true).animate({right:'-100dvw'}).fadeOut(0);
    });

});