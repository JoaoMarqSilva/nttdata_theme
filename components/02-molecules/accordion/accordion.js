(function($, Drupal) {
  'user strict';
  
  Drupal.behaviors.accordion = {
    attach: function (context) {
      $('.main-accordion').each(function () {
        var _this = $(this);
        _this.off('click').on('click', '.field--name-field-title', function (event) {
          event.stopPropagation(); // Stop event propagation to prevent multiple executions
          _this.find('.field--name-field-title').toggleClass('open');
          _this.find('.container-description').toggleClass('open').slideToggle(500); // Toggle class and slide animation
        });
      });
    }
  };
  
    
  
})(jQuery, Drupal);
