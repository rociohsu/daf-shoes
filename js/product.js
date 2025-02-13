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
    }
    
});