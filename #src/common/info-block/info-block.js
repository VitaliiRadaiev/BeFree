{
    let slider = document.querySelector('.slider-info-block');
    if(slider) {
        let dataSlider;
             dataSlider = new Swiper(slider.querySelector('.swiper-container'), {
            /*
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */

            slidesPerView: 1,
            spaceBetween: 10,
            speed: 600,
            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            pagination: {
            	el: slider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            // Arrows
            navigation: {
                nextEl: slider.querySelector('.slider-info-block__btn_next'),
                prevEl: slider.querySelector('.slider-info-block__btn_prev'),
            },
            /*
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            */
            // on: {
            //     lazyImageReady: function () {
            //         ibg();
            //     },
            // }
            // And if we need scrollbar
            //scrollbar: {
            //	el: '.swiper-scrollbar',
            //},
        });
    }

    let infoBlockBody = document.querySelector('.info-block__body');
    if(infoBlockBody) {
        if(document.documentElement.clientWidth < 992 && document.documentElement.clientWidth > 767) {
            let div = document.createElement('div');
            div.className = 'info-block__column-3';

            let textBLock = infoBlockBody.querySelector('.info-block__row-2');
            if(textBLock) {
                div.append(textBLock)
            }

            infoBlockBody.append(div);
        }
    }
}