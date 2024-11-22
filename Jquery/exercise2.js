$(document).ready(function(){
    var slide=$(".box");
    var numright=$(".box").length;
    slide.hide();
    var s=0;
    slide.eq(s).show();
    getSlide_page();
    //next slide
    function getSlide_page(){
        $(".page_slide").find("li").eq(0).addClass("color")
    }
    $(".next").click(function(){
        AutoSlide();
        // $(".page_slide").find("li").eq(s).removeClass("color")
        // slide.eq(s).hide();
        // //s++;
        // s=s+1;
        // if(s>=numright){
        //     s=0;
        // }
        // slide.eq(s).show();
        // $(".page_slide").find("li").eq(s).addClass("color")
    });
    //back slide
    $(".back").click(function(){
        $(".page_slide").find("li").eq(s).removeClass("color")
        slide.eq(s).hide();
        //s--;
        s=s-1;
        if(s<0){
            s=numright-1;
        }
        slide.eq(s).show();
        $(".page_slide").find("li").eq(s).addClass("color")
    });
    var AutoSlide=function(){
        $(".page_slide").find("li").eq(s).removeClass("color")
        slide.eq(s).hide();
        //s++;
        s=s+1;
        if(s>=numright){
            s=0;
        }
        slide.eq(s).show();
        $(".page_slide").find("li").eq(s).addClass("color")
    }
    $(".page_slide").on("click","li",function(){
        $(".page_slide").find("li").eq(s).removeClass("color")
        slide.eq(s).hide();
        s = $(this).index();
        slide.eq(s).show();
        $(this).addClass("color");
    });

    //Auto slide
    var ClearAutoslide=setInterval(function(){
        AutoSlide();
    },
    1000
    );
    $(".mainbox").mouseover(function(){
        clearInterval(ClearAutoslide);
    });
    $(".mainbox").mouseout(function(){
        ClearAutoslide=setInterval(function(){
            AutoSlide();
        },1000);
    });
});