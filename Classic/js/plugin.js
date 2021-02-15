$(document).ready(function(){

    //header layout height
    $('.layout').height($(window).height());
    $(window).resize(()=>{
        $('.layout').height($(window).height());
        $('.bx-wrapper').css('top' ,($(window).height()-$('.header-content').height() )/2);
    });

    //active class
    $('nav ul li a').on('click',function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active');
    });
    $('nav ul li a').on('click',function(){
        $('html').animate({
            scrollTop: $('#' + $(this).attr('data-scroll')).offset().top
        })
    })



    //bx slider
    $('.slider').bxSlider({
        pager: false ,
    });
    $('.bx-wrapper').css('top' ,($(window).height()-$('.header-content').height() )/2);


    //testmonial slider
    (function testmonial(){
        $('.slide .active').each(function(){
            if (! $(this).is(':last-child')){
                $(this).delay(2000).fadeOut(1000,function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn(2000);
                    testmonial()
                });
            }else {
              $(this).delay(2000).fadeOut(1000,function(){
                $(this).removeClass('active');
                $('.slide div:first-child').addClass('active').fadeIn(2000);
                testmonial();
              })
            }
        });
    }());

    //shuffle items
    $('.projects ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        var it = $(this).data('filter') ;
        if (it == 'all'){
         $('.project-item').each(function(){
             $(this).fadeIn();
         })
        }else {
            $('.project-item').each(function(){
                if ($(this).data('filter') !== it){
                    $(this).fadeOut()
                }else {
                    $(this).fadeIn()
                }
            })
        }
        
    });




});