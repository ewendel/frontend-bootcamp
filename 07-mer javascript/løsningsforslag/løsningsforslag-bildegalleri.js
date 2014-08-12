function slideShow() {
  var current = $('.image-gallery .show');
  var next = current.next().is('img') ? current.next() : current.parent().find('img:first');
  current.hide().removeClass('show');
  current.fadeOut('slow', function() {
    next.fadeIn('slow').addClass('show');
  })


  setTimeout(slideShow, 5000);
}

var url = "http://sommer2014.herokuapp.com/";

$.ajax({
  dataType: "jsonp",
  url: url,
  success: function(response) {
    var html = $.map(response.images, function(img) {
        return '<img src="' + img + '" style="display:none" />';
    });

    $(".image-gallery")
        .html(html)
        .find("img:first").addClass("show");

    slideShow();
  },
  error: function(err) {
    console.error(err);
  }
});