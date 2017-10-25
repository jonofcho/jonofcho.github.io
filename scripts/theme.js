$(document).ready(function(){
  var nav = $('.js-theme__nav');
  var navHeight = nav.height();
  if ($(window).scrollTop() < navHeight) {
    nav.removeClass('theme__nav--transition');
  }


  // $('.js-pprint').on('click', function(){
  //   $('.js-about__print').;
  //   $('.js-about__pprint').fadeIn();
  // })

})
