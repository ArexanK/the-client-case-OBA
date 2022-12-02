// nav toggle - select button and links
let navToggle = document.querySelector("#navToggle")
let nav = document.querySelector("#nav-links")



//add event listener
navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
})