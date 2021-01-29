{
    let headBottomBtn = document.querySelector('.category-header__bottom-btn');
    if(headBottomBtn) {
        headBottomBtn.addEventListener('click', () => {
            let headerSort = document.querySelector('.category-header .category-header__toggle-slide');
            headBottomBtn.classList.toggle('_active');
            _slideToggle(headerSort, 600);
            cryptoSlider.update();
        })
    }

    let prductsFilter = document.querySelector('.products-filter');
    if(prductsFilter) {
        let remeberItem;
        prductsFilter.addEventListener('mouseenter', () => {
            let items = prductsFilter.querySelectorAll('.products-filter__list-item');
            items.forEach(item => {
                if(item.classList.contains('active')) {
                    remeberItem = item;
                    item.classList.remove('active');
                }
            })
        })

        prductsFilter.addEventListener('mouseleave', () => {
            if(remeberItem) {
                remeberItem.classList.add('active');
            }
        })

        prductsFilter.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 1024) {
                prductsFilter.classList.toggle('active');
                let list = prductsFilter.querySelector('.products-filter__list');
                _slideToggle(list, 600);
            }
        })

        document.body.addEventListener('click', (e) => {
            if(document.documentElement.clientWidth < 1024) {
                if(!e.target.closest('.products-filter')) {
                    let list = prductsFilter.querySelector('.products-filter__list');
                    _slideUp(list, 600);
                }
            }
        })
    }
}

{
    let textBlock = document.querySelector('.category-page-text');
    if(textBlock) {
        if(document.documentElement.clientWidth < 992) {
            let arr = [...textBlock.querySelectorAll('p')];
            if(arr.length > 2) {
                arr = arr.slice(2, arr.length);
                let div = document.createElement('div');
                div.className = '_toggleWrap';
                div.append(...arr);
    
                let container = textBlock.querySelector('.container')
                container.append(div);
    
                let btn = document.createElement('div');
                btn.className = "_toggleBtn";
                btn.innerText = 'Показать ещё';
    
                container.append(btn);
                
                btn.addEventListener('click', function() {
                    _slideToggle(this.previousElementSibling);
                    this.classList.toggle('_active');
    
                    if(this.classList.contains('_active')) {
                        this.innerText = "Скрыть";
                    } else {
                        this.innerText = "Показать ещё";
                    }
                })
            }
            
        }
    }
}