/* back to top section start*/

$(function (){
    $(window).on('scroll',function (){
       var scrollsize= $(window).scrollTop()

       if (scrollsize>200) {
        $('#backtotop').slideDown();
     }
     else $('#backtotop').slideUp();
    })

$('#backtotop').on('click',function() {
    $('html,body').animate({
        scrollTop:0,
    },1000    )
})
})
/* back to top section end */