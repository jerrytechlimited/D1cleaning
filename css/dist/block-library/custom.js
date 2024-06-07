/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

/* Mobile responsive Menu*/

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

jQuery('document').ready(function(){

    var owl = jQuery('#service .owl-carousel');
      owl.owlCarousel({
      margin:20,
      nav: false,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });
    var owl = jQuery('#partner .owl-carousel');
      owl.owlCarousel({
      margin: 10,
      nav:false,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots: false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });
    var owl = jQuery('#latest_news .owl-carousel');
      owl.owlCarousel({
      margin:30,
      nav: true,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#testimonial .owl-carousel');
      owl.owlCarousel({
      margin:20,
      nav: true,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:true,
      navText : ['<i class="fas fa-long-arrow-alt-left" aria-hidden="true"></i>','<i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 1
        },
        1000: {
          items: 2
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#team .owl-carousel');
      owl.owlCarousel({
      margin:20,
      nav: false,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:true,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#what_we_do .owl-carousel');
      owl.owlCarousel({
      margin:20,
      nav: false,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:true,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#counter .owl-carousel');
      owl.owlCarousel({
      margin:20,
      nav: false,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        768: {
          items: 4
        },
        1000: {
          items: 4
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });
    var owl = jQuery('#why_choose_us .owl-carousel');
      owl.owlCarousel({
      margin:20,
      nav: false,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });
    var owl = jQuery('#pricing .owl-carousel');
      owl.owlCarousel({
      margin:20,
      nav: false,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });
});

jQuery('document').ready(function() {

  jQuery('#counter .count').each(function () {
      jQuery(this).prop('Counter',0).animate({
          Counter: jQuery(this).text()
      }, {
          duration: 8000,
          easing: 'swing',
          step: function (now) {
             jQuery(this).text(Math.ceil(now));
          }
      });
  });

  var footer1=jQuery('#contact-details').outerHeight();
  jQuery('.google-map iframe').height(footer1);

  // ------------ Scroll Top ---------------

  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  jQuery('#return-to-top').click(function() {      // When arrow is clicked
    jQuery('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
    }, 2000);
  });

  jQuery('.project_slider').slick({
    rows: 2,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
   responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});

// ------------ Sticky Navbar -------------------

window.onscroll = function() { myScrollNav() };

var navbar = document.getElementById("header_navigation");
var sticky = navbar.offsetTop;
function myScrollNav() {
  if (window.pageYOffset > sticky) {
    //alert(window.pageYOffset);
    navbar.classList.add("sticky");
    navbar.classList.add("stickynavbar");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("stickynavbar");
  }
}

//Loader
jQuery(window).load(function() {
  jQuery(".preloader").delay(2000).fadeOut("slow");
});
