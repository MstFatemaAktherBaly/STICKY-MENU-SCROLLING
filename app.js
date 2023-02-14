/* back to top section start*/

$(function (){
    $(window).on('scroll',function (){
       var scrollsize= $(window).scrollTop()
/* back to top section end */

       if (scrollsize > 200) {
        $('#backtotop').slideDown();
     }
     else $('#backtotop').slideUp();


    //  fixed menu

    if (scrollsize > 300) {
        $('#nav').addClass('active')
    }
    })






$('#backtotop').on('click',function() {
    $('html,body').animate({
        scrollTop:0,
    },1000    )
})
})
