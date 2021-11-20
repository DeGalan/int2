$(document).ready(function() {
    $("main").show();
    $("#bg").hide();
    $("#potty-min").hide();
    $(".buttonVid").hide();
    $(".buttonMin").hide();
    
    $(".buttonGif").click(function() {
        $(".buttonGif").hide();
        $(".buttonVid").show();
        $(".button-2").hide();
        $("main").hide();
        $("#bg").show();
    });
    
    $(".buttonVid").click(function() {
        $(".buttonVid").hide();
        $(".buttonGif").show();
        $(".button-2").show();
        $("main").show();
        $("#bg").hide();
    });
    
    $(".buttonSizeMin").click(function() {
        $(".buttonSizeMin").hide();
        $(".buttonSizeMax").show();
        $("#potty-min").show();
        $("#potty").hide();
    });
    
    $(".buttonSizeMax").click(function() {
        $(".buttonSizeMin").show();
        $(".buttonSizeMax").hide();
        $("#potty-min").hide();
        $("#potty").show();
    });
});