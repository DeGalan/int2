$(document).ready(function() {
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    
    $(".cat-1").click(function() {
        $("#p1").toggle();
        $("#p2").hide();
        $("#p3").hide();
    });
    
    $(".cat-2").click(function() {
        $("#p1").hide();
        $("#p2").toggle();
        $("#p3").hide();
    });
    
    $(".cat-3").click(function() {
        $("#p1").hide();
        $("#p2").hide();
        $("#p3").toggle();
    });
});