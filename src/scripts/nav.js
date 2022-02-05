const toggleButton = document.getElementsByClassName('main-nav__toggle-button')[0]
const navbarLinks = document.getElementsByClassName('main-nav__section')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})