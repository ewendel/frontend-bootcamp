var IMAGE_URL = "http://sommer2015.herokuapp.com/";

var slideShowTimeout;
function slideShow($el) {
  var current = $el.find('.thumbs .active');
  var next;
  if(current.length === 0) {
    next = $el.find(".thumbs li:first").addClass("active");
  } else {
    next = current.next().is('li') ? current.next() : current.parent().find('li:first');
  }

  current.removeClass("active");
  next.addClass("active").find("a").click();

  clearTimeout(slideShowTimeout);
  slideShowTimeout = setTimeout(function() {
    slideShow($el);
  }, 10000);
}

function getImages($el, search) {
  $.ajax({
    dataType: "json",
    url: IMAGE_URL + encodeURIComponent(search || "pusekatt"),
    success: function(response) {
      var html = $.map(response.images, function(img) {
          return '<li><a href="' + img.url + '"><img src="' + img.thumb + '" /></a></li> ';
      });

      $el.find(".thumbs").html(html);

      slideShow($el);
    },
    error: function(err) {
      console.error(err);
    }
  });
}


$(document).ready(function() {
  var $imageGallery = $(".image-gallery");

  // setup events
  $imageGallery.on("click", ".thumbs a", function(event) {
    event.preventDefault();
    var $element = $(event.currentTarget);
    clearTimeout(slideShowTimeout);

    var url = $element.attr("href");
    $imageGallery.find(".featured").html('<img src="' + url + '" />');
  });

  var keyupTimeout;
  $imageGallery.on("keyup", "#search", function(event) {
    clearTimeout(keyupTimeout);
    var $element = $(event.currentTarget);

    var search = $element.val();

    keyupTimeout = setTimeout(function() {
      getImages($imageGallery, search);
    },600)
  });
});







