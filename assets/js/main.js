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

  var entries = [ 
                
    { label: 'Gulp', url: 'http://gulpjs.com/', target: '_top' },
    { label: 'GitHub', url: 'https://github.com/', target: '_top' },
    { label: 'Velocity.js', url: 'http://julian.com/research/velocity/', target: '_top' },
    { label: 'TweenLite', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' },
    { label: 'jQuery', url: 'https://jquery.com/', target: '_top' },
    { label: 'Wordpress', url: 'https://wordpress.org/', target: '_top' },
    { label: 'Pug', url: 'https://pugjs.org/api/getting-started.html', target: '_top' },
    { label: 'CSS3', url: 'https://www.w3schools.com/css/', target: '_top' },
    { label: 'HTML5', url: 'https://www.w3schools.com/html/', target: '_top' },
    { label: 'Javascript', url: 'https://www.javascript.com/', target: '_top' },
    { label: 'LESS', url: 'https://www.lesscss.org/', target: '_top' },
    { label: 'SASS', url: 'https://sass-lang.com/', target: '_top' },
    { label: 'Cloudflare', url: 'https://www.cloudflare.com/', target: '_top' },
    { label: 'Bootstrap', url: 'https://www.cloudflare.com/', target: '_top' },
];

var settings = {

    entries: entries,
    width: 480,
    height: 480,
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: "transparent",
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '15',
    fontColor: '#fff',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic 
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal',//bold
    tooltipFontStyle: 'normal',//italic 
    tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10

};

//var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
$( '#holder' ).svg3DTagCloud( settings );



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