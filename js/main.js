(function($) {
    $('[role=navigation] li').hover(
    function(){$(this).addClass("ccadm-hover");},
    function(){$(this).removeClass("ccadm-hover");}
    );
    $('[role=navigation] li a').on('focus blur',
    function(){$(this).parents().toggleClass("ccadm-hover");}
    );

   /* $('header .searchform .fa').click(function() {
        $('header .searchform').find("form").toggleClass('open');
    });*/

    var removeClass = true;
    $("header .searchform .fa").click(function () {
        $('header .searchform').find("form").toggleClass('open');
        removeClass = false;
    });

    $("header .searchform form").click(function() {
        removeClass = false;
    });

    $("html").click(function () {
        if (removeClass) {
            $("header .searchform form").removeClass('open');
        }
        removeClass = true;
    });

}(jQuery));