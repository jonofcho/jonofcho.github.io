$(document).ready(function(){
  var nav = $('.js-theme__nav');
  var navHeight = nav.height();

  if ($(window).scrollTop() < navHeight) {
    nav.removeClass('theme__nav--transition');
  }

  $(window).on('scroll', function(){
    var that = $(window);
    var scrollPos = that.scrollTop();
    var imageProfile = $('.js-hero-image__profile');
    if (scrollPos > navHeight) {
      nav.addClass('theme__nav--transition');
      imageProfile.addClass('opacity-on');
    }
    else {
      nav.removeClass('theme__nav--transition')
      imageProfile.removeClass('opacity-on');
    }
  })

  $('.js-pprint').on('click', function(){

  })

})
