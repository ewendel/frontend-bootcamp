var SlideShow = (function() {
  var imageTemplate = function(img) {
    return '<img src="' + img + '" style="display:none" />';
  };

  var SlideShow = function(options) {
    if(options.el) {
      this.setElement(options.el);
    }
    this.initialize.apply(this, arguments);
  };

  $.extend(SlideShow.prototype, {

    initialize: function(options) {
    },

    setElement: function(el) {
      this.$el = $(el);
    },

    render: function() {
    },

    nextSlide: function() {
    },

    startSlideShow: function() {
    }

  });

  return SlideShow;
})();

var slideShow = new SlideShow({
  el: ".image-gallery"
});



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
