$(window).ready(function(){

    //trigger nice scroll
   // $('html').niceScroll();

    //header height
    $('.header').height($(window).height());

    //center elements in header
    $('.header-content').css({
        paddingTop: ($(window).height() - $('.header-content').height()) / 2  - 40,
    });

    //cheveron down
    setInterval(function(){
        $('.header-icon i').animate({
            fontSize: '50px',
        }).animate({
            fontSize: '30px',
        });
    },500);

    //works animation
    $(window).on('scroll',function(){
            if ($(window).scrollTop() > 900){
                $('.work-item:nth-of-type(1)').animate({
                    width: '32%'
                },300,function(){
                    $('.work-item:nth-of-type(2)').animate({
                        width: '32%'
                    },300,function(){
                        $('.work-item:nth-of-type(3)').animate({
                            width: '32%'
                        },300,function(){
                            $('.work-item:nth-of-type(4)').animate({
                                width: '32%'
                            },300,function(){
                                $('.work-item:nth-of-type(5)').animate({
                                    width: '32%'
                                },300,function(){
                                    $('.work-item:nth-of-type(6)').animate({
                                        width: '32%'
                                    },300);
                                });
                            });
                        });
                    });
                })
            }
    }).stop();

    //testmonial
    $('.fa-chevron-left').on('click',function(){
        if ($('.testmonial-item.active').is('.testmonial-item:nth-of-type(1)'))
        {
            $('.testmonial-item:nth-of-type(1)').fadeOut(1000,function(){
                $('.testmonial-item:nth-of-type(1)').removeClass('active');
                $('.testmonial-item:last-of-type').addClass('active').fadeIn();
            });
        }else {
            $('.testmonial-item.active').fadeOut(1000,function(){
                $('.testmonial-item.active').removeClass('active').prev().addClass('active').fadeIn();
            })
        }
    })

    $('.fa-chevron-right').on('click',function(){
        if ($('.testmonial-item.active').is('.testmonial-item:last-of-type'))
        {
            $('.testmonial-item:last-of-type').fadeOut(1000,function(){
                $('.testmonial-item:last-of-type').removeClass('active');
                $('.testmonial-item:nth-of-type(1)').addClass('active').fadeIn();
            });
        }else {
            $('.testmonial-item.active').fadeOut(1000,function(){
                $('.testmonial-item.active').removeClass('active').next().addClass('active').fadeIn();
            })
        }
    })
});