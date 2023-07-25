
$(document).ready(function () {
  var minWidth = 1180;

  function applyHeaderMainDisplay() {
      if ($(window).width() >= minWidth) {
          $(".header-main").css("display", "block");
      } else {
          $(".header-main").css("display", "none");
      }
  }

  $(window).resize(function () {
      applyHeaderMainDisplay();
  });
});


$(".wrap-col-imgs p").slick({
  slidesToShow: 6,
  dots: false,
  autoplay: true,
  infinite: true,
  arrows: false,
  responsive: [
      {
          breakpoint: 821,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 560,
          settings: {
              slidesToShow: 2
          }
      },
  ]
});

$(".slider-clients .slick-slider").slick({
  slidesToShow: 5,
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  responsive: [
      {
          breakpoint: 821,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 560,
          settings: {
              slidesToShow: 2
          }
      },
  ]
});

$(".repeat-des-des .slick-slider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: "<button type='button' class='btn-prev'><i class='fa fa-chevron-left'></i></button>",
  nextArrow: "<button type='button' class='btn-next'><i class='fa fa-chevron-right'></i></button>"
});

$(".portfolio-slider").slick({
  dots: true,
  infinite: true,
  arrows: false,

});

function resetHeight() {

  $(".js-box").each(function () {
      $(this).find(".box").css('min-height', 'initial');
  });

  $(".js-post-vertical").each(function () {
      $(this).find(".box .des").css('min-height', 'initial');
  });

  $(".js-post-box").each(function () {
      $(this).find(".box").css('min-height', 'initial');
  });

}

function resizeBox() {
  if (screen.width > 480) {
      $(".js-box").each(function () {
          var box_height = 0;
          $(this).find(".box").each(function () {

              var e_box_height = $(this).outerHeight();

              if (e_box_height > box_height) {
                  box_height = e_box_height;
              }
          });
          if (box_height > 0) {
              $(this).find(".box").css('min-height', box_height);
          }
      });
      $(".js-post-vertical").each(function () {
          var box_height = 0;
          $(this).find(".box .des").each(function () {
              var e_box_height = $(this).outerHeight();
              if (e_box_height > box_height) {
                  box_height = e_box_height;
              }
          });
          if (box_height > 0) {
              $(this).find(".box .des").css('min-height', box_height);
          }
      });
  }
  if (screen.width > 780) {
      $(".js-post-box").each(function () {
          var box_height = 0;
          var img_height = 0;
          $(this).find(".box").each(function () {

              var e_box_height = $(this).outerHeight();
              var e_img_height = $(this).find('.img').outerHeight();
              if (e_box_height > box_height) {
                  box_height = e_box_height;
              }
              if (e_img_height > img_height) {
                  img_height = e_img_height;
              }

          });

          if (img_height > 0) {
              $(this).find(".box-post .img").css('min-height', img_height);
          }
          if (box_height > 0) {
              if ($(this).find(".box a").length < 1) {
                  box_height = box_height - 30;
                  $(this).find(".box").css('padding-bottom', '20px');
              }
              $(this).find(".box").css('min-height', box_height);
          }
      });
  }
}
if ($(window).width() < 1180) {
  $('.body').addClass('mobile-menu');
}
$(window).resize(function () {
  resetHeight();
  resizeBox();
  if ($(window).width() < 1180) {
      $('.header-main').hide();
      $('.body').addClass('mobile-menu');
  } else {
      $('.header-main').fadeIn();
      $('.body').removeClass('mobile-menu');
  }
});
$(".toggle-menu-button").on('click', function () {
  //console.log('click');

  var check_toggle_menu = $('.header-main');
  if (check_toggle_menu.is(":hidden")) {
      $('.header-main').fadeIn();
      $(".toggle-menu-dash").addClass('toggle-menu-active');
  } else {
      $('.header-main').fadeOut();
      $(".toggle-menu-dash").removeClass('toggle-menu-active');

  }
});
$(".mobile-menu .header-main ul.main-menu-box>.menu-item-has-children>a").append('<span class="dropdown-toggle-menu"></span>');
$(".mobile-menu .header-main ul.main-menu-box>.menu-item-has-children a span").click(function (event) {
  event.preventDefault();
  var check_sube_menu = $(this).parent().parent().find('.sub-menu-wrap');
  if (check_sube_menu.is(":hidden")) {
      check_sube_menu.slideDown();
      $(this).parent().addClass('has-children-active');
  } else {
      check_sube_menu.slideUp();
      $(this).parent().removeClass('has-children-active');
  }
});

$(".portfolio-carousel").slick({
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: "<button type='button' class='btn-prev'><i class='fa fa-chevron-left'></i></button>",
  nextArrow: "<button type='button' class='btn-next'><i class='fa fa-chevron-right'></i></button>",
  slidesToShow: 4,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 780,
          settings: {
              slidesToShow: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1
          }
      }
  ]

});
$('.footer-callout .owl-carousel').owlCarousel({
  items: 1,
  autoplay: true,
  autoplayTimeout: 3500,
  loop: true,
  margin: 0,
  dotsContainer: '.custom-dots'
});

$(".footer-reviewed .slick-slider").slick({
  dots: false,
  autoplay: true,
  infinite: true,
  arrows: false,
  slidesToShow: 4,
  responsive: [
      {
          breakpoint: 780,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2
          }
      },
  ]
});

$(".testimonial-carousel .slick-slider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: "<button type='button' class='btn-prev'><i class='fa fa-arrow-left'></i></button>",
  nextArrow: "<button type='button' class='btn-next'><i class='fa fa-arrow-right'></i></button>"
});

$(".slider-image-des .slick-slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
});
$(".post-box-carousel").slick({
  slidesToShow: 2,
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  responsive: [
      {
          breakpoint: 700,
          settings: {
              slidesToShow: 1
          }
      },
  ]
});
$(".slider-post-box").slick({
  slidesToShow: 3,
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  prevArrow: "<button type='button' class='btn-prev'><i class='fa-solid fa-angle-left'></i></button>",
  nextArrow: "<button type='button' class='btn-next'><i class='fa-solid fa-angle-right'></i></button>",
  responsive: [
      {
          breakpoint: 560,
          settings: {
              slidesToShow: 1
          }
      },
  ]
});

$(".label-style1 input").focus(function () {
  $(this).closest('label').addClass('active');
});

$(document).on("focusout", ".label-style1 input", function () {
  if (!$(this).val()) {
      $(this).closest('label').removeClass('active');
  }

});
$(document).ready(function () {
  var videoElement = document.querySelector('.iframe-video video');
  var mejsLayers = $('.iframe-video .mejs-layers');
  $(videoElement).on('pause', function () {
      mejsLayers.toggleClass("active");
  });
  $(videoElement).on('play', function () {
      mejsLayers.removeClass("active");
  });
  $(mejsLayers).on('click', function () {
      if (videoElement.paused) {
          videoElement.play();
          mejsLayers.removeClass("active");
      } else {
          videoElement.pause();
          mejsLayers.toggleClass("active")
      }
      videoElement.setAttribute("controls", "controls");
  });
});

$(".repeater-slider-box .slick-slider").slick({
  centerMode: true,
  slidesToShow: 3,
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: "<button type='button' class='btn-prev'><i class='fa fa-angle-left'></i></button>",
  nextArrow: "<button type='button' class='btn-next'><i class='fa fa-angle-right'></i></button>",
  responsive: [
      {
          breakpoint: 560,
          settings: {
              slidesToShow: 1
          }
      },
  ],
});
$(".posts-carousel").slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: true,
  prevArrow: "<button type='button' class='btn-prev'><i class='fa-solid fa-chevron-left'></i></button>",
  nextArrow: "<button type='button' class='btn-next'><i class='fa-solid fa-chevron-right'></i></button>",
  slidesToShow: 3,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 780,
          settings: {
              slidesToShow: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1
          }
      }
  ],
});
$('.accordion-btn1 .title').click(function (e) {
  e.preventDefault();
  $(this).next('.des').slideToggle();
  $(this).toggleClass('active');
});
$('.accordion-btn2 .box').click(function (e) {
  e.preventDefault();
  var parentSection = $(this).closest('.accordion-style');
  parentSection.find('.des').removeClass('active');
  parentSection.find('.box').removeClass('active');
  $(this).addClass('active');
  parentSection.find('.accordion-des' + $(this).data('box')).addClass('active');
});

var count_box_top = $(".count-box").offset().top;
var count_box_height = $(".count-box").outerHeight();
var windowHeight = window.innerHeight;
var checkScroll = false;
$(window).scroll(function () {
  var get_scroll = jQuery(this).scrollTop();

  if (get_scroll > count_box_top - windowHeight && get_scroll < count_box_top + windowHeight) {
      if (!checkScroll) {
          checkScroll = true;
          $('.count-box strong em').each(function () {
              $(this).prop('Counter', 0).animate({
                  Counter: $(this).text()
              }, {
                  duration: 1500,
                  easing: 'swing',
                  step: function (now) {
                      $(this).text(Math.ceil(now));
                  }
              });
          });
      }
  };
})