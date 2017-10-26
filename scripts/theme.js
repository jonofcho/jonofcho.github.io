$(document).ready(function(){
  var nav = $('.js-theme__nav');
  var navHeight = nav.height();
  if ($(window).scrollTop() < navHeight) {
    nav.removeClass('theme__nav--transition');
  }

  var options = [
    {
      selector: '.js-index__about--icon', offset: 200, callback: function(el) {
        $(el).removeClass("scale-out");
      }
    }
  ];
  Materialize.scrollFire(options);



})
