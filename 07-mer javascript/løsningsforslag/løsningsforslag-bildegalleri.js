var IMAGE_URL = "http://rest-images.herokuapp.com/";

var slideShowTimeout;
function slideShow() {
  var current = $('.image-gallery .thumbs .active');
  var next = current.next().is('li') ? current.next() : current.parent().find('li:first');
  current.removeClass("active");
  next.addClass("active").find("a").click();

  clearTimeout(slideShowTimeout);
  slideShowTimeout = setTimeout(slideShow, 10000);
}

function getImages($el, search) {
  $.ajax({
    dataType: "json",
    url: IMAGE_URL + encodeURIComponent(search || "pusekatt"),
    success: function(response) {
      var html = $.map(response.images, function(img) {
          return '<li><a href="' + img.url + '"><img src="' + img.thumb + '" /></a></li> ';
      });

      $el.find(".thumbs").html(html).find("li:first").addClass("active");

      slideShow();
    },
    error: function(err) {
      console.error(err);
    }
  });
}


$(document).ready(function() {
  var $imageGallery = $(".image-gallery");

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
    },800)
  });
});







