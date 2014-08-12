function slideShow() {
  var current = $('.image-gallery .show');
  var next = current.next().is('img') ? current.next() : current.parent().find('img:first');
  current.hide().removeClass('show');
  current.fadeOut('slow', function() {
  	next.fadeIn('slow').addClass('show');
  })


  setTimeout(slideShow, 5000);
}


slideShow();

// last bilder med jsonp fra sommer2014 api-et
var url = "http://sommer2014.herokuapp.com/";
$.ajax({

});
