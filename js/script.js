$(function(){

// sticky menu
$(".js--services-section").waypoint(function(direction){

  if (direction == "down"){
    $("nav").addClass("sticky");
  }else{
    $("nav").removeClass("sticky");
  }
});

  //banner part js
  $('#banner-main').slick({
    infinite: true,
    speed: 2000,
    autoplay: false,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-right prev-arrow"></i>',
    nextArrow: '<i class="fas fa-arrow-left nxt-arrow"></i>',
    dotsClass: 'slick_dots',
  });

  //team slider
  $('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  //testimonial slider
  $('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  //blog slider
  $('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


  // client slider

  //testimonial slider
  $('.client-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

   // Venobox
   $('.venobox').venobox(); 

  //isotop portfolio
  $('.portfolio-filter li').on('click', function(){
    $('.portfolio-filter li').removeClass('active');
    $(this).addClass('active');

    var filterValue = $(this).attr('data-filter');
    $('.portfolio-list').isotope({
        filter: filterValue,
        layoutMode: 'masonry',
        masonry: {
          columnWidth: '.col-md-3',
          horizontalOrder: false
        }
    });

  });


  $('.portfolio-list').isotope({
    layoutMode: 'masonry',
    masonry: {
      columnWidth: '.col-md-3',
      horizontalOrder: false
    }
  });

 
    

});

//animated circle
$('svg.radial-progress').each(function( index, value ) { 
  $(this).find($('circle.complete')).removeAttr( 'style' );
});
$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll');

