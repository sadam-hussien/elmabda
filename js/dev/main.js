$(function () {

    // start flickity
    $('.intro .main-carousel').flickity({

        // options
        fade: true,
        // cellAlign: 'left',
        contain: true,
        autoPlay: true,
        autoPlay: 2000,
        prevNextButtons: false,
        pageDots: false,
        pauseAutoPlayOnHover: false,
    });   
    $('.testim .main-carousel').flickity({

        // options
        contain: true,
        autoPlay: true,
        autoPlay: 2000,
        pageDots: true,
        pauseAutoPlayOnHover: false,
        
    }); 
    // ==== end flicktiy 

    // start header
    let theIntroHeight = $(".intro").innerHeight();
    let theHeader = $(".main-header");
    let theHeaderHeight = theHeader.innerHeight();
    let finalPosition = theIntroHeight - (theHeaderHeight / 2);
    theHeader.css("top", finalPosition + "px");

    $(".header-sep").css("height", theHeaderHeight / 2 + "px");

    // add active class on header when the scroll top is equal the header offset top
    // $(window).on("scroll", function () {

    //     if ($(this).scrollTop() >= finalPosition) {
    //         theHeader.addClass("active");
    //     } else {
    //         theHeader.removeClass("active");
    //     }

    // });
    // ==== end header

    $(".toggle-menu").on("click", function () {

        $(".main-header").toggleClass("active");

    });

    $(".main-header nav li").on("click", function () {

        $("html, body").animate({
            scrollTop: $("." + $(this).data("section")).offset().top
        }, 800);

        $(".main-header").removeClass("active");

    });

});