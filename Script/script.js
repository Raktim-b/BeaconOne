$(document).ready(function () {
  $(".testimonial-img-slick").slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".testimonial-cntn-slider",
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 1500,
    pauseOnHover: true,
    prevArrow: `
      <button class="slick-prev custom-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
        </svg>
      </button>
    `,
    nextArrow: `
      <button class="slick-next custom-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
        </svg>
      </button>
    `,
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
