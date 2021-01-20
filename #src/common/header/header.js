{
    let navLink = document.querySelectorAll('.nav-link.dropdown-toggle');
    if(navLink.length) {
        navLink.forEach(item => {
            if(document.documentElement.clientWidth < 992) {
                item.removeAttribute('data-toggle');
            }
            item.addEventListener('click', function(){
                if(document.documentElement.clientWidth < 992) {
                    this.classList.toggle('_active');
                    _slideToggle(this.nextElementSibling);
                    this.parentElement.classList.toggle('_active');
                    
                    navLink.forEach(i => {
                        if(i == this) {
                            return
                        }

                        i.classList.remove('_active');
                        _slideUp(i.nextElementSibling);
                        i.parentElement.classList.remove('_active');
                    })
                }
            })
        })
    }
}