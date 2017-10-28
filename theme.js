$(document).ready(function(){
  var nav = $('.js-theme__nav');
  var navHeight = nav.height();
  var modal = $('.modal')
  modal.modal();
  if ($(window).scrollTop() < navHeight) {
    nav.removeClass('theme__nav--transition');
  }

  $(window).on('scroll', function(){
    var that = $(window);
    var scrollPos = that.scrollTop();
    if (scrollPos > navHeight) {
      nav.addClass('theme__nav--transition');
    }
    else {
      nav.removeClass('theme__nav--transition')
    }
  })

  $('.js-index__modal--trigger').on('click', function(){
    var that = $(this);
    if (that.hasClass('js-index__about--icon--0')) {
      $('.index__tech--scripting').hide();
      $('.index__tech--styling').show();
    }
    else if (that.hasClass('js-index__about--icon--1')) {
      $('.index__tech--scripting').show();
      $('.index__tech--styling').hide();
    }
    else if (that.hasClass('js-index__about--icon--2')) {
      Materialize.toast('Nothing very notable for now.', 3000);
      return false;
    }
    else {
      return false;
    }
    $('.modal').modal('open');
  })

  var options = [
    {
      selector: '.js-index__about--icon--0', offset: 200, callback: function(el) {
        $(el).removeClass("scale-out");
      }
    },
    {
      selector: '.js-index__about--icon--1', offset: 200, callback: function(el) {
        $(el).removeClass("scale-out");
      }
    },
    {
      selector: '.js-index__about--icon--2', offset: 200, callback: function(el) {
        $(el).removeClass("scale-out");
      }
    },
    {
      selector: '.index__profile--list', offset: 200, callback: function(el) {
        Materialize.showStaggeredList($(el))
      }

    }
  ];
  Materialize.scrollFire(options);
  // $('.js-pprint').on('click', function(){
  //   $('.js-about__print').;
  //   $('.js-about__pprint').fadeIn();
  // })
  $('.tech__styling--section').on('mouseenter', function(){
    var that = $(this);
    if (that.attr('id') === 'caseology') {
      Materialize.toast('Caseology is a consumer electronics brand that is ranked among the top 10 U.S sellers in the Amazon marketplace.');
    }
    else if(that.attr('id') === 'ativegroup'){
      Materialize.toast('Ative Group is a firm that provides the following services : Branding , Digital Strategy, Product Design.');
    }
  }).on('mouseleave', function(){
    Materialize.Toast.removeAll();
  })

  var $imgPosition = $('.index__profile--container').offset().top;
  var imgStop = $('.index__profile--container').offset();
  var $windowHeight = $(window).height() / 2;
  // console.log($windowHeight);
  // console.log(imgStop);
  $('.index__img').pushpin({
    top: $imgPosition,
    bottom: $('.theme__footer').offset().top - $windowHeight,
    offset: $windowHeight
  });

  $('.scrollspy').scrollSpy();
})
