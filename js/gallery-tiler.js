(function ($) {
  Backdrop.behaviors.galleryTilerColorbox = {
    attach: function (context, settings) {
      $('.gallery-tiler .field-items a').colorbox({'rel': 'tiled-gallery'});
    }
  }
})(jQuery);
