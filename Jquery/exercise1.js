$(document).ready(function(){
    var popup="<div class='popup'></div>";
    $(".aa").click(function(){
        $(".slide").css({"left":"0px"});
        $("body").append(popup);
    });
    $("body").on("click",".popup",function(){
        $(this).remove();
        $(".slide").css({"left":"-410px"});
    });

    var n=0;
    $(".slide").on("click","#m1",function(){
        if(n==0){
            $(this).parent().find('.sub-menu').slideDown();
            $(this).find('i').addClass("down");
            n=1;
        }
        else{
            $(this).parent().find('.sub-menu').slideUp();
            $(this).find('i').removeClass("down");
            n=0;
        }
    });
});