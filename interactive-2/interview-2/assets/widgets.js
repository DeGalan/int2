$(document).ready(function () {
    $("#settings").hide();
    
    $("#c2").hide();
    $("#c3").hide();
    $("#c4").hide();
    $("#c5").hide();
    
    $("#c1").click(function () {
        $("#c1").hide();
        $("#c2").show();
        $("#c3").hide();
        $("#c4").hide();
        $("#c5").hide();
        $("#device").removeClass("bg-black");
        $("#device").addClass("bg-slate");
        $("#device").removeClass("bg-blue");
        $("#device").removeClass("bg-green");
        $("#device").removeClass("bg-pink");
    });
    
    $("#c2").click(function () {
        $("#c1").hide();
        $("#c2").hide();
        $("#c3").show();
        $("#c4").hide();
        $("#c5").hide();
        $("#device").removeClass("bg-black");
        $("#device").removeClass("bg-slate");
        $("#device").addClass("bg-blue");
        $("#device").removeClass("bg-green");
        $("#device").removeClass("bg-pink");
    });
    
    $("#c3").click(function () {
        $("#c1").hide();
        $("#c2").hide();
        $("#c3").hide();
        $("#c4").show();
        $("#c5").hide();
        $("#device").removeClass("bg-black");
        $("#device").removeClass("bg-slate");
        $("#device").removeClass("bg-blue");
        $("#device").addClass("bg-green");
        $("#device").removeClass("bg-pink");
    });
    
    $("#c4").click(function () {
        $("#c1").hide();
        $("#c2").hide();
        $("#c3").hide();
        $("#c4").hide();
        $("#c5").show();
        $("#device").removeClass("bg-black");
        $("#device").removeClass("bg-slate");
        $("#device").removeClass("bg-blue");
        $("#device").removeClass("bg-green");
        $("#device").addClass("bg-pink");
    });
    
    $("#c5").click(function () {
        $("#c1").show();
        $("#c2").hide();
        $("#c3").hide();
        $("#c4").hide();
        $("#c5").hide();
        $("#device").addClass("bg-black");
        $("#device").removeClass("bg-slate");
        $("#device").removeClass("bg-blue");
        $("#device").removeClass("bg-green");
        $("#device").removeClass("bg-pink");
    });
    
});