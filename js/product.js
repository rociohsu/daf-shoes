$(function(){
    console.log(window.innerWidth); //瀏覽器寬度

    if(window.innerWidth > 820) {
        //電腦版 商品列表頁左側選單開合
        $('.container.product .pt-category__title').click(function(){
            $(this).toggleClass('open');
            $(this).next('.pt-category__menu').stop(false, true).slideToggle(300);
        });

        //電腦版 商品列表頁 hover商品換圖
        $('.pt-list .pt-item__pic').hover(
            function() {
                imgUrl1 = $(this).children('img').attr('src');
                imgUrl2 = $(this).attr('rel');
                
                $(this).children('img').attr('src',imgUrl2);
            }, function() {
                $(this).children('img').attr('src',imgUrl1);
            }
        );

        //電腦版 商品詳情頁 商品圖放大鏡功能
        var $easyzoom = $('.easyzoom').easyZoom();
    }else{
        //手機版 打開篩選頁  
        $('.filter-btn').click(function(){
            $('body').addClass('no-scroll');
            $('.filter-page').stop(false, true).fadeIn(0).animate({right:'0'});
        });
        $('.filter-page .btn-close').click(function(){
            $('body').removeClass('no-scroll');
            $('.filter-page').stop(false, true).animate({right:'-100dvw'}).fadeOut(0);
        });

        //手機板 把商品輪播往上放至header下
        $('.photo-products').appendTo( $('.container.product-detail') );

        //手機版 商品圖輪播
        var swiper = new Swiper('.photo-products', {
            autoHeight: true,
            spaceBetween: 0,
            allowTouchMove: true,
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
        });
    }

    //商品詳情頁 切換tab
    $('.pt-content__tab a:not(.popup)').click(function(){
        var id = $(this).attr('rel');
        $('.pt-content__tab a').removeClass('current');
        $(this).addClass('current');
        $('.pt-content__pane > div').removeClass('current');
        $('#'+id).addClass('current');
    });
});