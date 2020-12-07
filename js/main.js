$(document).ready(function(){

var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInviewport: true,
  },
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [41.039671, 28.966327],
      zoom: 16,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
  myMap.geoObjects.add(
    new ymaps.Placemark(
      [41.039671, 28.966327],
      {
        balloonContent: "цвет <strong>воды пляжа бонди</strong>",
      },
      {
        preset: "islands#icon",
        iconColor: "#0095b6",
      }
    )
  );
}

$(".menu-button").click(function () {
  $(".navbar__bottom").toggleClass("navbar__bottom-active");
});

var modalButton = $("[data-toggle=modal]");
modalButton.on(".click", openModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addclass("modal__overlay--visible");
  modalDialog.addclass("modal__dialog--visible"); 
};
});

