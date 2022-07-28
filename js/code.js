$(function () {

    //*active logo here*/

    $(".menu_icon").click(function () {

        let logo = $("nav .logo");
        let navMenu = $("#navbarSupportedContent ul");
        logo.toggleClass("activeLogo");
        navMenu.fadeToggle();
    });

    //* banner slide */

    $("#banner").slick({

        arrows: false,
    });




});