$(document).ready(function () {

  // partical.js

  particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
  });

  // partical.js works-page bug fix

  // $(".nav__item").click(function () {
  //   if ($(".nav__item").index(this) == 3) {
  //     $("canvas").hide()
  //   } else {
  //     $("canvas").show()
  //   }
  // })   
})

$(".nav__item").hover(function () {
  $(this).toggleClass("bg_dark")
})

$(".home-page__button").hover(function() {
  $(this).removeClass("zoomInRight")
  $(this).toggleClass("rubberBand")
})

$(".nav__item_home").click(function(){
  $(".home-page__button").addClass("zoomInRight")
})





// active page

$(".nav__item").click(function () {
  $("section").addClass("page")
  $("section").eq($(".nav__item").index(this)).removeClass("page")
  $(".nav__item").removeClass("bg_blue")
  $(this).addClass("bg_blue")
})