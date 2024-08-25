import Swiper from './swiper-bundle.min.js';
const swiper = new Swiper('.js-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.js-button-next',
        prevEl: '.js-button-prev',
    },
});