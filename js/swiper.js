const headerslider = document.querySelector('.header__slider.swiper-container');

const headerSwiper = new Swiper(headerslider, {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
    }
});

const servicesSlider = document.querySelector('.services__items.swiper-container-vertical');

const servicesSwiper = new Swiper(servicesSlider, {
    slidesPerView: 1,
    spaceBBetween: 20,
    direction: "vertical",
    loop: true,
    pagination: {
        el: '.swiper-pagination-services',
        clickable: true
    }
});

const studySlider = document.querySelector('.study__slider-text.swiper-container');

const studySwiper = new Swiper(studySlider, {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: '.study-pagination',
        clickable: true,
    }
})