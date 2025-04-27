'use strict'
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const button = document.querySelectorAll('.button')
const closeButton = document.querySelector('.close-modal')

for(let i = 0; i < button.length; i++)
    button[i].addEventListener('click', function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    })
    // closeButton.addEventListener('click', function(){
    //     modal.classList.add('hidden')
    //     overlay.classList.add('hidden')
    // })
const closeModals = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

   closeButton.addEventListener('click', closeModals)
   overlay.addEventListener('click', closeModals)

   document.addEventListener('keydown', function (e) {
    console.log(e.key)

    if(e.key === 'Escape'){
      if (!modal.classList.contains('hidden')){
        closeModals()
      }
    }
   })
