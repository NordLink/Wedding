const button = document.querySelector('.scroll__to__top')

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        button.classList.add('visible')
    }
    if(window.scrollY < 200) {
        button.classList.remove('visible')
    }
})