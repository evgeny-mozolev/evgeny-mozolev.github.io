$( document ).ready(function() {

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