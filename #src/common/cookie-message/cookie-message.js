function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

{
    const $cookieEl = document.getElementById('cookieMessage');
    if($cookieEl) {
        let closeBtns = document.querySelectorAll('.cookie-message__close');
        if(closeBtns.length) {
            closeBtns.forEach(btnClose => {
                btnClose.addEventListener('click', (e) => {
                    e.preventDefault();
                    $cookieEl.style.display = 'none';
                })
            })
        }

        let cookies = () => {
            if (!getCookie('hide-cookie')) {
                setTimeout(() => {
                    $cookieEl.style.display = 'block';
                }, 1000);
            }

            document.cookie = encodeURIComponent('hide-cookie') + "=" + encodeURIComponent('true') + "; path=/; max-age=86400";
        }



        cookies();
    }
    
}