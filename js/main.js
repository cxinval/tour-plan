var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInviewport: true,
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


