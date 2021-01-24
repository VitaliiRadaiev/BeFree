let menuTable = document.querySelector('.tabs-block__head');
if(menuTable) {
    let items = document.querySelectorAll('.tabs-block__head-title')
     items.forEach((item) => {
        item.addEventListener('click', function(e) {
            
            if(document.documentElement.clientWidth > 767) {
                e.preventDefault();

                if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 992) {
                    if(item.classList.contains('_feedback-btn')) {
                        return
                    }
                }

                const id = e.target.getAttribute('href').replace('#','');
    
                document.querySelectorAll('.tabs-block__head-title').forEach((child) => {
                    child.classList.remove('active');
                });
    
                document.querySelectorAll('.tabs-block__content').forEach((child) => {
                    child.classList.remove('active');
                });
    
                item.classList.add('active');
                document.getElementById(id).classList.add('active');
            }

            if(document.documentElement.clientWidth < 768) {
                e.preventDefault();

                if(!this.classList.contains('_feedback-btn')) {
                    if(this.nextElementSibling) {
                        this.classList.toggle('_active');
                        this.nextElementSibling.classList.toggle('_active');
                        _slideToggle(this.nextElementSibling, 500);
        
                    }
    
                    items.forEach(item => {
                        if(item == this) {
                            return
                        }
                        if(item.nextElementSibling) {
                            item.classList.remove('_active');
                            item.nextElementSibling.classList.remove('_active');
                            _slideUp(item.nextElementSibling, 500);
    
                        }
                    })
                }


            }
        });
    });

    let feedBackBtn = document.querySelector('.tabs-block__head-title._feedback-btn');
    let feedBackBlockBtn = document.querySelector('.tabs-block__head-item._feedback')
    let feedBackForm = document.querySelector('.feedback-form');
    if(feedBackBtn) {
        window.addEventListener('resize', () => {
            if(document.documentElement.clientWidth < 992) {
                if(feedBackBtn.classList.contains('active')) {
                    feedBackBtn.classList.remove('active');
                    let reviewsTabs = document.querySelector('.tabs-block__head-item_reviews .tabs-block__head-title');
                    reviewsTabs.classList.add('active');
                    document.getElementById('tab-3').classList.add('active');
                }
            }
        });
    
    
        feedBackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(document.documentElement.clientWidth < 768) {
                feedBackForm.classList.add('_isFormMobileShow');
                document.body.classList.add('lock');
            } else if(document.documentElement.clientWidth < 992) {
                _slideDown(feedBackForm);
                setTimeout(() => {
                     _slideUp(feedBackBlockBtn);
    
                }, 600)
            }
        })
    }


    let cancelBtn = document.querySelector('.feedback-form__cancel');
    if(cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 992) {
                _slideUp(feedBackForm);
                setTimeout(() => {
                     _slideDown(feedBackBlockBtn);
    
                }, 600)
            }
        });
    }

    let formErrowBack = document.querySelector('.feedback-form__arrow-back');
    if(formErrowBack) {
        formErrowBack.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 768) {
                feedBackForm.classList.remove('_isFormMobileShow');
                document.body.classList.remove('lock');
            }
        })

    }
}
