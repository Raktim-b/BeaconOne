$(document).ready(function () {
  $(".testimonial-img-slick").slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".testimonial-cntn-slider",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".testimonial-cntn-slider").slick({
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    centerMode: true,
    infinite: true,
  });

  $(".testimonial-img-slick .slick-center").next().addClass("sl-next");
  $(".testimonial-img-slick .slick-center").prev().addClass("sl-prev");

  $(".testimonial-img-slick").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(this).find(".slick-center").next().removeClass("sl-next");
      $(this).find(".slick-center").prev().removeClass("sl-prev");
    }
  );

  $(".testimonial-img-slick").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(this).find(".slick-center").next().addClass("sl-next");
      $(this).find(".slick-center").prev().addClass("sl-prev");
    }
  );
});
