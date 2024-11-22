(function (window) {

    const windowWidth = window.innerWidth
    const component = (element) => {
        if (!element) {
            return;
        }

        const sliderCategory = element.querySelector('.s-catalog__swiper') || element.closest('.s-catalog__swiper');
        //const reviewSlider = element.querySelector('СЮДА ВСТАВИШЬ СВОЙ КЛАСС') || element.closest('СЮДА ВСТАВИШЬ СВОЙ КЛАСС');


        new Swiper(sliderCategory, {
            slidesPerView: 4,
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
                    slidesPerView: 4,
                },
            }
        });


        // new Swiper(reviewSlider, {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },
        //     breakpoints: {
        //         1: {
        //             slidesPerView: 2,
        //             spaceBetween: 12,
        //         },
        //         767: {
        //             slidesPerView: 2,
        //         },
        //         1279: {
        //             slidesPerView: 4,
        //         },
        //     }
        // });
    };

    const mount = () => {
        const elements = document.querySelectorAll('.swiper');
        elements.forEach(component);
    };

    document.addEventListener('DOMContentLoaded', mount);
})(window);
