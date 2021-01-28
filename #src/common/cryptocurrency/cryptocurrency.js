{
    let cryptocurrencySlider = document.querySelector('.cryptocurrency__slider');
    if(cryptocurrencySlider) {
        let dataSlider = new Swiper(cryptocurrencySlider.querySelector('.swiper-container'), {
            freeMode: true,
            /*
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */
            // observer: true,
            // observeParents: true,
            // slidesPerView: 5,
            // spaceBetween: 0,
            // autoHeight: true,
            speed: 600,
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            pagination: {
            	el: cryptocurrencySlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            // Arrows
            // navigation: {
            //     nextEl: '.about__more .more__item_next',
            //     prevEl: '.about__more .more__item_prev',
            // },
            
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    freeMode: false,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    freeMode: false,

                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    freeMode: false,

                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1268: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                },
            },
            
            on: {
                lazyImageReady: function () {
                    ibg();
                },
            }
            // And if we need scrollbar
            //scrollbar: {
            //	el: '.swiper-scrollbar',
            //},
        });
        
    }
}