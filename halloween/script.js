console.log("Script Loaded...");

// Lantern //
$("body").mousemove(function(event){
    $(".lantern").css("top", event.clientY-240).css("left", event.clientX-240);
});

// Surprise //
$(".surprise").mouseleave(function(){
    $(this).animate({height: 240},50).delay(250).animate({height: 25},1000);
    $("body").css({"background":"black"});
    $("h1").css({"color":"black"});
});

$(".surpriseNew").click(function(){
    $("body").css({"background-color":"white"});
});