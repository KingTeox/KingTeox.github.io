$(function () {

    "use strict";


    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "assets/images/logo.svg");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "assets/images/logo-2.svg");
        }
    });


});
