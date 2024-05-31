const btns = document.querySelectorAll('[data-target]')
const close_btns = document.querySelectorAll('.close-button')
const overlay = document.querySelector('#overlay')

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active")
    overlay.classList.add('active')
  })
})

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.remove("active")
    overlay.classList.remove('active')
  })
})

window.onclick = (e) => {
  if (e.target == overlay) {
    const modals =document.querySelectorAll('.modal')
    modals.forEach((modal) => modal.classList.remove('active'))
    overlay.classList.remove('active')
  }
}


// failed

// const openModalButtons = document.querySelectorAll('[data-open-modal]')
// const closeModalButtons = document.querySelectorAll('[data-close-modal]')
// const overlay = document.getElementById('overlay')


// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.openModal)
//     openModal(modal)
//     const modal1 = document.querySelector(button.dataset.openModal)
//     openModal(modal1)
//   })
// })

// openModalButtons.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     document.querySelector(btn.dataset.openModal).classList.add('active')
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('#modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   console.log("opening modal")
//   if (modal != null) {
//     opened = true
//     modal.classList.add('active')
//     overlay.classList.add('active')
//   }
// }

// function closeModal(modal) {
//   console.log("closing modal")
//   if (modal != null) {
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
//   }
// }


// const openButton = document.querySelector("[data-open-modal]")
// const closeButton = document.querySelector("[data-close-modal]")
// const modal = document.querySelector("[data-modal]")

// openButton.addEventListener("click", () => {
//   modal.showModal()
//   modal1.showModal()
// })

// openButton.forEach((btn, idx) => btn.addEventListener("click", e => modal[idx].showModal()));
// closeButton.forEach(btn => btn.addEventListener("click", e => btn.closest('.modal').close()));

// closeButton.addEventListener("click", () => {
//   modal.close()
//   modal1.close()
// })

// modal.addEventListener("click", e => {
//   const dialogDimensions = modal.getBoundingClientRect()
//   if (
//     e.clientX < dialogDimensions.left ||
//     e.clientX > dialogDimensions.right ||
//     e.clientY < dialogDimensions.top ||
//     e.clientY > dialogDimensions.bottom
//   ) {
//     modal.close()
//   }
// })







// closeModalButtons.click(function(){
//   $(".modal1").remove('active');
// })


// const openModal= (modal) => {
//   const modal = document.getElementById(modal)
//   modal.classList.add
// }