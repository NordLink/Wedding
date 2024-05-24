const burgerMenu = document.querySelector(".burger")

const firstSection = document.querySelector(".first_section")

burgerMenu.addEventListener('click', function() {
    console.log("1");
    firstSection.classList.toggle('open');
    burgerMenu.classList.toggle('open');
});