"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  var _$$flickity, _$$flickity2;

  // start flickity
  $('.intro .main-carousel').flickity((_$$flickity = {
    // options
    fade: true,
    // cellAlign: 'left',
    contain: true,
    autoPlay: true
  }, _defineProperty(_$$flickity, "autoPlay", 2000), _defineProperty(_$$flickity, "prevNextButtons", false), _defineProperty(_$$flickity, "pageDots", false), _defineProperty(_$$flickity, "pauseAutoPlayOnHover", false), _$$flickity));
  $('.testim .main-carousel').flickity((_$$flickity2 = {
    // options
    contain: true,
    autoPlay: true
  }, _defineProperty(_$$flickity2, "autoPlay", 2000), _defineProperty(_$$flickity2, "pageDots", true), _defineProperty(_$$flickity2, "pauseAutoPlayOnHover", false), _$$flickity2)); // ==== end flicktiy 
  // start header

  var theIntroHeight = $(".intro").innerHeight();
  var theHeader = $(".main-header");
  var theHeaderHeight = theHeader.innerHeight();
  var finalPosition = theIntroHeight - theHeaderHeight / 2;
  theHeader.css("top", finalPosition + "px");
  $(".header-sep").css("height", theHeaderHeight / 2 + "px"); // add active class on header when the scroll top is equal the header offset top
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