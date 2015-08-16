window.BEKK = window.BEKK || {};

(function() {
  var IMAGE_URL = "http://sommer2015.herokuapp.com/";


  var getImages = function(search) {
    return $.ajax({
      dataType: "json",
      url: IMAGE_URL + encodeURIComponent(search || "")
    });
  };

  var SlideShow = function(options) {

    this.$el = options.el
    this.initialize();
  };


  $.extend(SlideShow.prototype, {
    initialize: function() {
      this.bindEvents();
    },

    bindEvents: function() {
      this.$el.on("click", ".thumbs a", this.thumbsImageClickHandler.bind(this));
      this.$el.on("keyup", "#search", this.searchKeyUpHandler.bind(this));
    },

    fetch: function(searchKeyword) {
      this.showLoading();
      var promise = getImages(searchKeyword);
      promise.done(this.renderThumbs.bind(this));
    },

    renderThumbs: function(data) {
        this.stopSlideShow();
        this.hideLoading();

        var html = $.map(data.images, function(img) {
            return '<li><a href="' + img.url + '"><img src="' + img.thumb + '" /></a></li> ';
        });
        this.$el.find(".thumbs").html(html);

        this.startSlideShow();
    },

    showLoading: function() {
      this.$el.addClass("loading");
    },

    hideLoading: function() {
      this.$el.removeClass("loading");
    },

    startSlideShow: function() {
      var $current = this.$el.find('.thumbs .active');
      var $next;

      if($current.length === 0) {
        $next = this.$el.find(".thumbs li:first").addClass("active");
      } else {
        $next = $current.next().is('li') ? $current.next() : $current.parent().find('li:first');
      }

      $current.removeClass("active");
      $next.addClass("active").find("a").click();

      this.slideShowTimeoutId = setTimeout((function() {
        this.startSlideShow();
      }).bind(this), 10000);
    },

    stopSlideShow: function() {
      clearTimeout(this.slideShowTimeoutId);
    },

    // events
    searchKeyUpHandler: function(event) {
      if(event.which === 13) {
        var value = $(event.currentTarget).val();
        this.fetch(value);
      }
    },

    thumbsImageClickHandler: function(event) {
      event.preventDefault();
      var $element = $(event.currentTarget);

      var url = $element.attr("href");
      this.stopSlideShow();
      this.$el.find(".featured").html('<img src="' + url + '" />');
    }
  });

  BEKK.SlideShow = SlideShow;

})();


/// helt annen fil

$(document).ready(function() {
  var slideShow = new BEKK.SlideShow({
    el: $(".image-gallery"),
    itemsToShow: 5
  });

  slideShow.fetch();
});
