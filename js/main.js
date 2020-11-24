var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  width: 728, 
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard:{
    enabled:true,
    onlyInviewport:true,
  },
});



