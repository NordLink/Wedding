const header = document.querySelector('.header')

const changeHeaderStyles = () => {
    if (window.scrollY > 100) {
        header.classList.add('fixed')
    }
    if(window.scrollY == 0) {
        header.classList.remove('fixed')
    }
}

window.addEventListener('scroll', changeHeaderStyles)