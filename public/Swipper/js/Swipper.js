  import Swiper from "swiper";
  import { Navigation, Autoplay } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";

  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Autoplay],

    direction: "horizontal",
    loop: true,
    slidesPerView: 5,
    autoplay: {
      delay: 4000,
    },
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1220: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });