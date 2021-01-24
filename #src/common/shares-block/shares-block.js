{
    let sharesSlider = document.querySelector('.shares-slider');
    if(sharesSlider) {
        let dataSlider;

        function mobileSlider() {
            if(document.documentElement.clientWidth > 991 && sharesSlider.dataset.mobile == 'false') {
                dataSlider = new Swiper(sharesSlider.querySelector('.swiper-container'), {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    speed: 600,
                    //touchRatio: 0,
                    //simulateTouch: false,
                    loop: true,
                    //preloadImages: false,
                    //lazy: true,
                    // Dotts
                    pagination: {
                        el: sharesSlider.querySelector('.swiper-pagination'),
                        clickable: true,
                    },
                    // Arrows
                    navigation: {
                        nextEl: sharesSlider.querySelector('.shares-slider__btn_next'),
                        prevEl: sharesSlider.querySelector('.shares-slider__btn_prev'),
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

                sharesSlider.dataset.mobile == 'true';
            }

            if(document.documentElement.clientWidth < 992) {
				sharesSlider.dataset.mobile = 'false';

				if(sharesSlider.querySelector('.swiper-container').classList.contains('swiper-container-initialized')) {
					dataSlider.destroy();
				}
			}
        } 
        
        mobileSlider();

        window.addEventListener('resize', () => {
			mobileSlider();
		})

    }
}