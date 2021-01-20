{
    let popularBrand = document.querySelector('.popular-brand');

    if(popularBrand) {
            let slider;
            slider = new Swiper(popularBrand.querySelector('.popular-brand__slider .swiper-container'), {
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
            on: {
                init: function () {
                   // transferCards();
                    //console.log(slider);
                    
                },
            }
            // And if we need scrollbar
            //scrollbar: {
            //	el: '.swiper-scrollbar',
            //},

        });

        let windowWidth = 992;
        let numElements = 9;

        if(document.documentElement.clientWidth < 480) {
            windowWidth = 480;
            numElements = 5;
        } else if(document.documentElement.clientWidth < 768) {
            windowWidth = 768;
            numElements = 7;
        }  
        
        function transferCards(params) {
            let wrapper = popularBrand.querySelector('.swiper-wrapper');
            if(wrapper) {
                if(document.documentElement.clientWidth < windowWidth) {
                    let arr = [];

                    for(let slide of wrapper.children) {
                        if(slide.children.length > numElements) {
                            let cards = [...slide.children].slice(numElements, slide.children.length);
                            arr.push(...cards);
                        }      
                    }

                    if(arr.length > numElements) {
                        let count = Math.ceil(arr.length / numElements);
                        for(let i = 0; i < count; i++) {
                            let div = document.createElement('div');
                            div.className = 'swiper-slide';
                            div.append(...arr.slice(0, numElements));
                            arr = arr.slice(numElements, arr.length);
                            if(slider) {
                                slider.appendSlide(div);
                            }
                        }
                        
                        
                    } else {
                        let div = document.createElement('div');
                        div.className = 'swiper-slide';
                        div.append(...arr);

                        if(slider) {
                            slider.appendSlide(div);
                        }
                    }

                    
                    for(let slide of wrapper.children) {
                        for(let el of slide.children) {
                            el.classList.remove('_big-width', '_big-heigth')
                        }
                        
                         if(document.documentElement.clientWidth < 480) {
                            if(slide.children[2]) slide.children[2].classList.add('_big-width');
                            console.log('test3');
                        } else if(document.documentElement.clientWidth < 768) {
                            if(slide.children[3]) slide.children[3].classList.add('_big-width');
                            if(slide.children[4]) slide.children[4].classList.add('_big-heigth');
                            console.log('test2');
                        } else if(document.documentElement.clientWidth < 992) {
                            if(slide.children[0]) slide.children[0].classList.add('_big-heigth');
                            if(slide.children[6]) slide.children[6].classList.add('_big-heigth');
                            if(slide.children[8]) slide.children[8].classList.add('_big-width');
                            console.log('test1');
                        } 
                    }
                    
                }
            }
        }

        transferCards();

    }
}
