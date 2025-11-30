$(document).ready(function () {
  AOS.init();
  luxy.init({
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.08,
  });
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
  const $cursor = $(".cursor");
  let mouseX = 0;
  let mouseY = 0;
  let clientX = 0;
  let clientY = 0;

  $(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function MouseMove() {
    clientX += (mouseX - clientX) * 0.05;
    clientY += (mouseY - clientY) * 0.05;

    $cursor.css({
      top: clientY + "px",
      left: clientX + "px",
    });

    requestAnimationFrame(MouseMove);
  }

  MouseMove();

  // AOS refresh
  AOS.refresh();
});
$(window).on("load", function () {
  const $loader = $(".loading-box");
  const $content = $(".page-wrpr");

  // Keep loader for at least 3 seconds
  setTimeout(() => {
    $loader.addClass("fade-out");

    setTimeout(() => {
      $loader.hide();
      $content.removeClass("hidden").addClass("show");
    }, 500); // wait for fade-out transition
  }, 3000);
});
