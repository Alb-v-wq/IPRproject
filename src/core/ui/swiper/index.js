(function (window) {

    const windowWidth = window.innerWidth
    const component = (element) => {
        if (!element) {
            return;
        }

        const sliderCategory = element.querySelector('.s-catalog__swiper') || element.closest('.s-catalog__swiper');
        const reviewsSlider = element.querySelector('.s-reviews__swiper') || element.closest('.s-reviews__swiper');


        new Swiper(sliderCategory, {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },
                767: {
                    slidesPerView: 1,
                },
                1279: {
                    slidesPerView: 3,
                },
            }
        });


        new Swiper(reviewsSlider, {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                767: {
                    slidesPerView: 2,
                },
                1279: {
                    slidesPerView: 3,
                },
            }
        });
    };

    const mount = () => {
        const elements = document.querySelectorAll('.swiper');
        elements.forEach(component);
    };

    document.addEventListener('DOMContentLoaded', mount);
})(window);
