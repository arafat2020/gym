// banner slider
$('#banner-part').slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // venobox for video
  $('.venobox').venobox();
  // testimonial slider
  $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // counter-up
  $('.count-num').counterUp({
    delay: 10,
    time: 3000
});
// wow^^^^^^^^^^
new WOW().init();


// stcky menubar
$(window).scroll(function(){
  var scrollAmount = $(window).scrollTop()
  if(scrollAmount > 550) {
    $(".navbar").addClass("fixed")
  }else {
    $(".navbar").removeClass("fixed")
  }
  if(scrollAmount > 1000) {
    $(".btop").fadeIn()
  }else {
    $(".btop").fadeOut()
  }
})
$(".btop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})

// color tab js
$("#colorful").colorfulTab();    
// brand slider
$('.brand-slider-torun').slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i> ',
  appendDots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
        
