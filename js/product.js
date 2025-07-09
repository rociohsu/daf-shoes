$(function(){
    console.log(window.innerWidth); //瀏覽器寬度

    productResize();
    initOrDestroySwiper(); //商品圖輪播 重新檢查

    $(window).resize(function(){
        productResize();
        initOrDestroySwiper(); //商品圖輪播 重新檢查
    });

    //商品列表頁 hover商品換圖
    $('.pt-list .pt-item__pic').hover(
        function() {
            imgUrl1 = $(this).children('img').attr('src');
            imgUrl2 = $(this).attr('rel');
                
            $(this).children('img').attr('src',imgUrl2);
        }, function() {
            $(this).children('img').attr('src',imgUrl1);
        }
    );

    //商品詳情頁 切換tab
    $('.pt-content__tab a:not(.popup)').click(function(){
        var id = $(this).attr('rel');
        $('.pt-content__tab a').removeClass('current');
        $(this).addClass('current');
        $('.pt-content__pane .pt-content__pane__content').removeClass('current');
        $('#'+id).addClass('current');
    });
});

/* 是否啟用swiper輪播 */
let mySwiper = null;

function initOrDestroySwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 821) {
    if (!mySwiper) {
      mySwiper = new Swiper('.photo-products', {
            autoHeight: true,
            spaceBetween: 0,
            allowTouchMove: true,
            loop: true,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });
    }
  } else {
    if (mySwiper) {
      mySwiper.destroy(true, true); // 銷毀並移除 DOM 修改
      mySwiper = null;
    }
  }
}

//電腦版/手機版分別調用js
function productResize(){
    if(window.innerWidth > 820) {
        //電腦版 商品列表頁左側選單開合
        $('.container.product .pt-category__title').click(function(){
            $(this).toggleClass('open');
            $(this).parent('.pt-category__group').children('.pt-category__menu').stop(false, true).slideToggle(300);
        }); 

        //電腦版 商品詳情頁 商品圖放大鏡功能
        //var $easyzoom = $('.easyzoom').easyZoom();

        //電腦版 把商品輪播放回左上區域
        $('.photo-products').insertBefore( $('.container__left__wrap') );
        
    }else{

        //手機版 把商品輪播往上放至header下
        $('.photo-products').insertBefore( $('.product-detail') );

        //手機版 打開篩選頁  
        $('.filter-btn').click(function(){
            $('html').addClass('no-scroll');
            $('.filter-page').stop(false, true).fadeIn(0).animate({right:'0'});
        });
        $('.filter-page .btn-close').click(function(){
            $('html').removeClass('no-scroll');
            $('.filter-page').stop(false, true).animate({right:'-100dvw'}).fadeOut(0);
        });
    }
}