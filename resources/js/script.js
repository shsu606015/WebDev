$(document).ready(function() {

    /* for nav*/
    $('.js--section-info').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* for botton */
    $('.js--scroll-to-info').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-info').offset().top}, 1000);
    });

    $('.js--scroll-to-projects').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-pro').offset().top}, 1000);
    });

    $('.js--scroll-back').click(function() {
        $('html, body').animate({scrollTop: $('header').offset().top}, 1000);
    });

    /* nav scroll */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

});