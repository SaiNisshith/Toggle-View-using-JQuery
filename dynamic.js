var container = $(".conatiner");
var ball = $(".ball");
var toggle = $('.toggle');
var k = true;
toggle.click(function(){
    if(k){
        ball.css("left","74%");
        $('body').css({
            backgroundColor: "black",
            color : "white"
        });
        toggle.css({
            backgroundColor: "white"
        });
        k = false;
    }else{
        ball.css("left","0%");
        $('body').css({
            backgroundColor: "white",
            color : "black"
        });
        k = true;
    }
});