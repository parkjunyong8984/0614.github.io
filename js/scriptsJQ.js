$(document).ready(function(){
    $('.link').click(function(){
        $('.link').removeClass('act');
        $(this).addClass('act');
    })
    $(window).scroll(function(){
        if( $(window).scrollTop() > 80){
        $("body").addClass("scroll");
        $("#nav").addClass("fixed-top");

    }
        else{
        $("body").removeClass("scroll");
        $("#nav").removeClass("fixed-top");
        }
    })
})