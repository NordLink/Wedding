const header = document.querySelector('.header')

const changeHeaderStyles = () => {
    if (window.scrollY > 100) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
}

window.addEventListener('scroll', changeHeaderStyles)