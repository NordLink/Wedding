const burgerMenu = document.querySelector(".burger")
const firstSection = document.querySelector(".first_section")
const menuLinks = document.querySelectorAll('#main_menu a')

function toggleClasses() {
    firstSection.classList.toggle('open')
    burgerMenu.classList.toggle('open')
}

burgerMenu.addEventListener('click', toggleClasses)

menuLinks.forEach(link => {
    link.addEventListener('click', toggleClasses)
})