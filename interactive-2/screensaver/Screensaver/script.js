$('document').ready(function () {
    var mouseIdle;
    var saverState = false;
    var timeIdle = 3;
    
    function saverShow(){
        $('.main').fadeIn();
        saverState = true;
    }
    function saverHide(){
        $('.main').fadeOut();
        saverState = false;
    }
    $(document).click(function(){
        clearTimeout(mouseIdle);
        
        if (saverState) {
            saverHide();
        }
        
        mouseIdle = setTimeout(function(){
            saverShow();
        }, 2500 * timeIdle);
    });
    $(document).mousemove(function(){
        clearTimeout(mouseIdle);
        
        mouseIdle - setTimeout(function(){
            saverShow();
        }, 2500 * timeIdle);
    });
    
});