$( document ).ready(function() {







    $(".carousel-inner").swipe( {
        //Generic swipe handler for all directions
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next');
        },
        swipeRight: function() {
            $(this).parent().carousel('prev');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
    });

    $('.navbar-toggler').click(function(){
        $('.menu-button').toggleClass('toggler-invisible');
    });

    $(".navbar-toggler").on("click", function() {
        $(".brandname").toggleClass('toggler-invisible');
        //var brandname_height = $('.brandname').height();

        $(".navbar").toggleClass('toggle-navbar');
        //$(".navbar-text").toggleClass('height-50');
        $(".nav-container").toggleClass('toggle-nav-container');
        $("html").toggleClass('toggle-html');
        $("body").toggleClass('toggle-body');
    });
});