{
    let popularBrand = document.querySelector('.popular-brand');
    console.log(popularBrand);
    
    if(popularBrand) {
        let slider_about = new Swiper(popularBrand.querySelector('.popular-brand__slider .swiper-container'), {
            /*
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */
            slidesPerView: 1,
            spaceBetween: 40,
            speed: 800,
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            pagination: {
            	el: popularBrand.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            // Arrows
            navigation: {
                nextEl: popularBrand.querySelector('.popular-brand__slider-btn_next'),
                prevEl: popularBrand.querySelector('.popular-brand__slider-btn_prev'),
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
}
