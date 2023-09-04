document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            991: {
                slidesPerView: 3
            }
        }
    });
});


var acceso = document.getElementById("acceder");
acceso.addEventListener("click", function () {
    alert("HOLA!");
});