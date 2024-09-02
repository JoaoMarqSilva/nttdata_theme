/* *
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.nttdata_theme_mobile_menu = {
    attach: function (context, settings) {
  
      // Menu mobile logic.
      $('.menu-toggle').off('click.menumobile').on('click.menumobile', function() {
        $('.header-top .region-header-top-2').slideToggle();
        $('.header-top .region-header-top-2 .nav').addClass('container');
        $(this).toggleClass('menu-close');
        $(this).parents('.header').toggleClass('menu-open');
  
        $('.header-top .menu-item--expanded').each(function() {
          if ($(this).hasClass('show')) {
            $(this).removeClass('show');
            $(this).find('.menu-background-expanded').css('display', 'none');
            $('.header-top .region-header-top-2').removeClass('container');
          }
        });
        if ($('.block-nttdata-theme-useraccountmenu').hasClass('show')) {
          $('.block-nttdata-theme-useraccountmenu').removeClass('show');
          $('.block-nttdata-theme-useraccountmenu .nav').slideUp();
        }
      });
  
      // Menu desktop logic.
      $('.header-top .menu-item--expanded').off('click.expanded').on('click.expanded', function() {
        // Toggle the 'show' class for the clicked element
        $(this).toggleClass('show');
        $(this).find('.menu-background-expanded').slideToggle();
    
        // Remove 'show' class from siblings
        $(this).siblings('.menu-item--expanded.show').each(function() {
            $(this).removeClass('show');
            $(this).find('.menu-background-expanded').slideUp();
        });
        if ($('.block-nttdata-theme-useraccountmenu').hasClass('show')) {
          $('.block-nttdata-theme-useraccountmenu').removeClass('show');
          $('.block-nttdata-theme-useraccountmenu .nav').slideUp();
        }
      });
  
      $('.block-nttdata-theme-useraccountmenu').off('click.expandeduser').on('click.expandeduser', function() {
        // Toggle the 'show' class for the clicked element
        $(this).toggleClass('show');
        $(this).find('.nav').slideToggle();
  
        $('.header-top .menu-item--expanded').siblings('.menu-item--expanded.show').each(function() {
          $(this).removeClass('show');
          $(this).find('.menu-background-expanded').slideUp();
        });
        // Close mobile menu
        if ($('.menu-toggle').hasClass('menu-close')) {
          $('.menu-toggle').removeClass('menu-close');
          $('.menu-toggle').parents('.header').find(".region-header-top-2").slideUp();
        }
    
      });
  
      // Close menus when clicking outside
      $(document).off('click.outsideMenu').on('click.outsideMenu', function(event) {
        // Check if the click is outside the menu
        if (!$(event.target).closest('.header-top, .menu-toggle, .block-nttdata-theme-useraccountmenu').length) {
          // Close mobile menu
          if ($('.menu-toggle').hasClass('menu-close')) {
            $('.menu-toggle').trigger('click.menumobile');
          }
  
          // Close all expanded menu items
          $('.header-top .menu-item--expanded.show').each(function() {
            $(this).removeClass('show');
            $(this).find('.menu-background-expanded').slideUp();
          });
  
          // Close user account menu
          if ($('.block-nttdata-theme-useraccountmenu').hasClass('show')) {
            $('.block-nttdata-theme-useraccountmenu').removeClass('show');
            $('.block-nttdata-theme-useraccountmenu .nav').slideUp();
          }
        }
      });
    },
  };
  
 
  
})(jQuery, Drupal);
