$(document).ready(function () {
    $(".chat-box-wendy").hide();
    $(".chat-box-degalan").hide();
    $(".chat-box-steven").hide();
    $(".back").hide();
    $("footer").hide();
    
    $(".back").click(function () {
        $(".chat-box-wendy").fadeOut();
        $(".chat-box-degalan").fadeOut();
        $(".chat-box-steven").fadeOut();
        $(".chat-box-home").slideDown();
        $(".back").fadeOut();
        $("footer").fadeOut();
        $("#block").fadeIn();
    });
    
    // CONTACT – WENDY
    
    $("#contact-wendy").click(function () {
        $(".chat-box-home").slideUp();
        $(".chat-box-wendy").fadeIn();
        $(".chat-box-degalan").hide();
        $(".chat-box-steven").hide();
        $(".back").fadeIn();
        $("footer").fadeIn();
        $("#block").fadeOut();
        $("#settings").fadeOut();
        $("#send-w0").fadeIn();
        $("#send-d0").hide();
        $("#send-s0").hide();
    });
    
    $("#send-w0").hide();
    $("#send-w1").hide();
    $("#send-w2").hide();
    $("#send-w3").hide();
    $("#send-w4").hide();
    $("#send-w5").hide();
    $("#send-w6").hide();
    $("#send-w7").hide();
    
    $("#wendy-1").hide();
    $("#wendy-2").hide();
    $("#wendy-3").hide();
    $("#wendy-4").hide();
    $("#wendy-5").hide();
    $("#wendy-6").hide();
    $("#wendy-7").hide();
    $("#wendy-8").hide();
    $("#wendy-9").hide();
    $("#wendy-10").hide();
    $("#wendy-11").hide();
    $("#wendy-12").hide();
    $("#wendy-13").hide();
    $("#wendy-14").hide();
    $("#wendy-15").hide();
    $("#wendy-16").hide();
    $("#wendy-17").hide();
    $("#wendy-18").hide();
    $("#wendy-19").hide();
    $("#wendy-pic-bg").hide();
    
    $("#send-w0").click(function () {
        $("#send-w0").hide();
        $("#send-w1").show();
        $("#wendy-1").slideDown();
        $("#wendy-2").slideDown();
    });
    
    $("#send-w1").click(function () {
        $("#send-w1").hide();
        $("#send-w2").show();
        $("#wendy-3").slideDown();
        $("#wendy-4").slideDown();
        $("#wendy-5").slideDown();
    });
    
    $("#send-w2").click(function () {
        $("#send-w2").hide();
        $("#send-w3").show();
        $("#wendy-6").slideDown();
        $("#wendy-7").slideDown();
        $("#wendy-8").slideDown();
        $("#wendy-9").slideDown();
    });
    
    $("#send-w3").click(function () {
        $("#send-w3").hide();
        $("#send-w4").show();
        $("#wendy-10").slideDown();
        $("#wendy-11").slideDown();
    });
    
    $("#send-w4").click(function () {
        $("#send-w4").hide();
        $("#send-w5").show();
        $("#wendy-12").slideDown();
        $("#wendy-13").slideDown();
        $("#wendy-14").slideDown();
    });
    
    $("#send-w5").click(function () {
        $("#send-w5").hide();
        $("#send-w6").show();
        $("#wendy-15").slideDown();
        $("#wendy-16").slideDown();
        $("#wendy-17").slideDown();
    });
    
    $("#send-w6").click(function () {
        $("#send-w6").hide();
        $("#send-none").show();
        $("#wendy-18").slideDown();
        $("#wendy-19").slideDown();
    });
    
    $("#wendy-pic").click(function () {
        $("#wendy-pic-bg").fadeIn();
    });
    
    $("#wendy-pic-x").click(function () {
        $("#wendy-pic-bg").fadeOut();
    });
    
    // fin
    
    // CONTACT – DEGALAN
    
    $("#contact-degalan").click(function () {
        $(".chat-box-home").slideUp();
        $(".chat-box-wendy").hide();
        $(".chat-box-degalan").fadeIn();
        $(".chat-box-steven").hide();
        $(".back").fadeIn();
        $("footer").fadeIn();
        $("#block").fadeOut();
        $("#settings").fadeOut();
        $("#send-w0").hide();
        $("#send-s0").hide();
        $("#send-s1").hide();
        $("#send-none").hide();
        $("#send-d0").show();
    });
    
    $("#deg-0").hide();
    $("#deg-1").hide();
    $("#deg-2").hide();
    $("#deg-3").hide();
    $("#deg-4").hide();
    $("#deg-5").hide();
    $("#deg-6").hide();
    $("#deg-7").hide();
    $("#deg-8").hide();
    $("#deg-9").hide();
    $("#deg-10").hide();
    $("#deg-11").hide();
    $("#deg-12").hide();
    $("#deg-13").hide();
    
    $("#send-d0").hide();
    $("#send-d1").hide();
    $("#send-d2").hide();
    $("#send-d3").hide();
    $("#send-d4").hide();
    $("#send-d5").hide();
    $("#send-d6").hide();
    $("#send-d7").hide();
    $("#send-d8").hide();
    $("#send-d9").hide();
    $("#send-d10").hide();
    
    $("#send-d0").click(function () {
        $("#send-d0").hide();
        $("#send-d1").show();
        $("#deg-0").slideDown();
        $("#deg-1").slideDown();
    });
    
    $("#send-d1").click(function () {
        $("#send-d1").hide();
        $("#send-d2").show();
        $("#deg-2").slideDown();
        $("#deg-3").slideDown();
    });
    
    $("#send-d2").click(function () {
        $("#send-d2").hide();
        $("#send-d3").show();
        $("#deg-4").slideDown();
        $("#deg-5").slideDown();
    });
    
    $("#send-d3").click(function () {
        $("#send-d3").hide();
        $("#send-d4").show();
        $("#deg-6").slideDown();
        $("#deg-7").slideDown();
    });
    
    $("#send-d4").click(function () {
        $("#send-d4").hide();
        $("#send-d5").show();
        $("#deg-8").slideDown();
        $("#deg-9").slideDown();
    });
    
    $("#send-d5").click(function () {
        $("#send-d5").hide();
        $("#send-d6").show();
        $("#deg-10").slideDown();
        $("#deg-11").slideDown();
    });
    
    $("#send-d6").click(function () {
        $("#send-d6").hide();
        $("#send-none").show();
        $("#deg-12").slideDown();
        $("#deg-13").slideDown();
    });
    
    // fin
    
    // CONTACT – STEVEN
    
    $("#contact-steven").click(function () {
        $(".chat-box-home").slideUp();
        $(".chat-box-wendy").hide();
        $(".chat-box-degalan").hide();
        $(".chat-box-steven").fadeIn();
        $(".back").fadeIn();
        $("footer").fadeIn();
        $("#block").fadeOut();
        $("#settings").fadeOut();
        $("#send-s0").fadeIn();
        $("#send-w0").hide();
        $("#send-d0").hide();
        $("#send-none").hide();
    });
    
    $("#sdg-1").hide();
    $("#sdg-2").hide();
    $("#sdg-3").hide();
    $("#sdg-4").hide();
    $("#sdg-5").hide();
    $("#sdg-6").hide();
    $("#sdg-7").hide();
    $("#sdg-8").hide();
    $("#sdg-9").hide();
    $("#sdg-10").hide();
    $("#sdg-11").hide();
    $("#sdg-12").hide();
    $("#sdg-13").hide();
    $("#sdg-14").hide();
    $("#sdg-15").hide();
    $("#sdg-16").hide();
    $("#sdg-17").hide();
    $("#sdg-18").hide();
    $("#sdg-19").hide();
    
    $("#send-s0").hide();
    $("#send-s1").hide();
    $("#send-s2").hide();
    $("#send-s3").hide();
    $("#send-s4").hide();
    $("#send-s5").hide();
    $("#send-s6").hide();
    $("#send-s7").hide();
    $("#send-s8").hide();
    $("#send-s9").hide();
    $("#send-s10").hide();
    $("#send-s11").hide();
    $("#send-s12").hide();
    $("#send-s13").hide();
    $("#send-s14").hide();
    $("#send-s15").hide();
    $("#send-none").hide();
    
    $("#send-s0").click(function () {
        $("#send-s0").hide();
        $("#send-s1").show();
        $("#sdg-1").slideDown();
        $("#sdg-2").slideDown();
        $("#sdg-3").slideDown();
        $("#sdg-4").slideDown();
    });
    
    $("#send-s1").click(function () {
        $("#send-s1").hide();
        $("#send-s2").show();
        $("#sdg-5").slideDown();
        $("#sdg-6").slideDown();
        $("#sdg-7").slideDown();
    });
    
    $("#send-s2").click(function () {
        $("#send-s2").hide();
        $("#send-s3").show();
        $("#sdg-8").slideDown();
        $("#sdg-9").slideDown();
        $("#sdg-10").slideDown();
    });
    
    $("#send-s3").click(function () {
        $("#send-s3").hide();
        $("#send-s4").show();
        $("#sdg-11").slideDown();
        $("#sdg-12").slideDown();
        $("#sdg-13").slideDown();
        $("#sdg-14").slideDown();
    });
    
    $("#send-s4").click(function () {
        $("#send-s4").hide();
        $("#send-s5").show();
        $("#sdg-15").slideDown();
        $("#sdg-16").slideDown();
        $("#sdg-17").slideDown();
    });
    
    $("#send-s5").click(function () {
        $("#send-s5").hide();
        $("#send-none").show();
        $("#sdg-18").slideDown();
        $("#sdg-19").slideDown();
    });
    
    $("#widget-home").click(function () {
        $("#settings").fadeToggle();
    });
    
    // fin
    
});