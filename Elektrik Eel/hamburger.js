const openHamburgerButtons = document.querySelectorAll('[data-hamburger-target]')
const closeHamburgerButtons = document.querySelectorAll('[data-close-hamburger]')

openHamburgerButtons.forEach(button => {
  button.addEventListener('click', () => {
    const hamburger = document.querySelector(button.dataset.hamburgerTarget)
    openHamburger(hamburger)
  })
})

closeHamburgerButtons.forEach(button => {
  button.addEventListener('click', () => {
    const hamburger = button.closest('.hamburger')
    closeHamburger(hamburger)
  })
})

function openHamburger(hamburger) {
  console.log("opening hamburger")
  if (hamburger != null) {
    opened = true
    hamburger.classList.add('active')
  }
}

function closeHamburger(hamburger) {
  console.log("closing hamburger")
  if (hamburger != null) {
    hamburger.classList.remove('active')
  }
}