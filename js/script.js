$(document).ready(function () {
  // Banner-Text-Slider

  $(".text-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    infinite: true,
    arrows: false,
    verticalSwiping: true,
    pauseOnHover: false,
  });

  $(".slider-main").slick({
    slidesToShow: 3,
    autoplay: true,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".testimonial-slider").slick({
    slidesToShow: 2,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#00b3f4" },
      shape: {
        type: "circle",
        stroke: { width: 1, color: "#00b3f4" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });

  //Counter UP
  $(".counter").counterUp({
    delay: 10,
    time: 5000,
  });

  var typed = new Typed("#typed", {
    strings: ["Graphic Designer .", "Web Designer .", "Web Developer ."],
    typeSpeed: 70,
    backSpeed: 0,
    loop: true,
  });

  var navbar = $("#navbar");
  $(window).scroll(() => {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > 150) {
      navbar.addClass("navbarScrollEffect");
    } else if (scrollTop <= 50) {
      navbar.removeClass("navbarScrollEffect");
    }
  });

  var mixer = mixitup(".portfolio-carousel");
});
