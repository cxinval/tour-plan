$(document).ready(function () {
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

  

  $(".menu-button").click(function () {
    $(".navbar__bottom").toggleClass("navbar__bottom-active");
  });

  
  

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    var modalOverlay = $(".modaloverlay");
    var modalDialog = $(".modaldialog");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

   $(".packages-item__buttons").click(function () {
     $(".modal__overlay").addClass("modal__overlay--visible");
     $(".modal__dialog").addClass("modal__dialog--visible");
   });
   $(".card__button").click(function () {
     $(".modal__overlay").addClass("modal__overlay--visible");
     $(".modal__dialog").addClass("modal__dialog--visible");
   });
  // Обработка форм

  $(".form").each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please Your name",
        },
        phone: {
          required: "Your phone number",
          minlength: " at least 10 characters",
        },
        mail: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
  
  $(".newsletter__subscribe").each(function () {
    $(this).validate({
      errorClass: "invali",
      messages: {
        email:{
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });

  $(document).ready(function () {
    $(".modal__number").mask("+7 (000) 000-00-00");
  });
  
AOS.init();

});
