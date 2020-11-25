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
        center: [7.575821, 79.803136],
        zoom: 10,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: "islands#blackStretchyIcon",
      // Метку можно перемещать.
      draggable: true,
    });
    myPieChart = new ymaps.Placemark(
    );
  myMap.geoObjects
    .add(myGeoObject)
    .add(myPieChart)
    .add(
      new ymaps.Placemark(
        [7.575821, 79.803136],
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
