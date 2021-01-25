{
    let entityList = document.querySelector('.entity-list');
    if(entityList) {
        let remeberItem;
        entityList.addEventListener('mousemove', () => {
            let items = entityList.querySelectorAll('.entity-list__triggers');
            items.forEach(item => {
                if(item.classList.contains('active')) {
                    remeberItem = item;
                    item.classList.remove('active');
                }
            })
        })

        entityList.addEventListener('mouseleave', () => {
            if(remeberItem) {
                remeberItem.classList.add('active');
            }
        })

        let entityItems = entityList.querySelectorAll('.entity-list__triggers');
        entityItems.forEach((item) => {
            item.addEventListener('click', function(e) {
                
                if(document.documentElement.clientWidth > 991) {
                    e.preventDefault();
    
                    const id = e.target.getAttribute('href').replace('#','');
        
                    entityList.querySelectorAll('.entity-list__triggers').forEach((child) => {
                        child.classList.remove('active');
                    });
        
                    document.querySelectorAll('.entity-form').forEach((child) => {
                        child.classList.remove('active');
                    });
        
                    item.classList.add('active');
                    document.getElementById(id).classList.add('active');
                }
    
                // if(document.documentElement.clientWidth < 992) {
                //     e.preventDefault();
    
                //     if(!this.classList.contains('_feedback-btn')) {
                //         if(this.nextElementSibling) {
                //             this.classList.toggle('_active');
                //             this.nextElementSibling.classList.toggle('_active');
                //             _slideToggle(this.nextElementSibling, 500);
            
                //         }
        
                //         items.forEach(item => {
                //             if(item == this) {
                //                 return
                //             }
                //             if(item.nextElementSibling) {
                //                 item.classList.remove('_active');
                //                 item.nextElementSibling.classList.remove('_active');
                //                 _slideUp(item.nextElementSibling, 500);
        
                //             }
                //         })
                //     }
    
    
                // }
            });
        });
    }

}