$(document).ready(function() {
    
    $(".nav-0-1").hide();
    
    $(".nav-0").click(function() {
        $(".nav").hide();
        $(".nav-0-1").show();
    });
    
    $(".nav-0-1").click(function() {
        $(".nav").show();
        $(".nav-0-1").hide();
    });
    
});