$(document).ready(function () {
    
    $(".menuCont").hide();
    $("#bg2").hide();
    $("#guide2").hide();
    $("#time2").hide();
    $("#time3").hide();
    $("#truetime").hide();
    $("#truetime2").hide();
    
    $(".menuX").click(function () {
        $(".menuCont").fadeOut();
    });
    
    $(".mode").click(function () {
        $(".menuCont").fadeToggle();
    });
    
    $("#bg").click(function () {
        $("body").addClass("cBlack");
        $(".mode").addClass("dark");
        $(".guide").addClass("dark");
        $(".gTitle").addClass("dark");
        $("#truetime").addClass("dark");
        $("#truetime2").addClass("dark");
        $("#canvas").addClass("dark");
        $("#bg2").show();
        $("#bg").hide();
    });
    
    $("#bg2").click(function () {
        $("body").removeClass("cBlack");
        $(".mode").removeClass("dark");
        $(".guide").removeClass("dark");
        $(".gTitle").removeClass("dark");
        $("#truetime").removeClass("dark");
        $("#truetime2").removeClass("dark");
        $("#canvas").removeClass("dark");
        $("#bg2").hide();
        $("#bg").show();
    });
    
    // Hide Guide
    
    $("#guide1").click(function() {
        $("#guide1").hide();
        $("#guide2").show();
        $(".guide").hide();
    });
    
    // Show Guide
    
    $("#guide2").click(function() {
        $("#guide2").hide();
        $("#guide1").show();
        $(".guide").show();
    });
    
    // Numerical Time: None
    $("#time1").click(function() {
        $("#time1").hide();
        $("#time2").show();
        $("#truetime").slideDown();
    });
    
    // Numerical Time: Upper
    $("#time2").click(function() {
        $("time").hide();
        $("#time2").hide();
        $("#time3").show();
        $("#truetime").slideUp();
        $("#truetime2").show();
    });
    
    // Numerical Time: Relative
    $("#time3").click(function() {
        $("#time3").hide();
        $("#time2").hide();
        $("#time1").show();
        $("#truetime").hide();
        $("#truetime2").hide();
    });
    
    $("#truetime").click(function() {
        $("#truetime").hide();
        $("#truetime2").show();
    });
    
    $("#truetime2").click(function() {
        $("#truetime2").hide();
        $("#truetime").show();
    });
    
});