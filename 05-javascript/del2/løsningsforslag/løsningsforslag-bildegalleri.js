function slideShow() {
  var current = $('.imageGallery .show');
  var next = current.next().is('img') ? current.next() : current.parent().find('img:first');
  current.hide().removeClass('show');
  current.fadeOut('slow', function() {
  	next.fadeIn('slow').addClass('show');	
  })
  

  //setTimeout(slideShow, 5000);
}

setInterval(slideShow, 5000);

slideShow();