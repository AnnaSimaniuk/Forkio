'use strict'

export const burger = () => {
   const navbar = document.querySelector('.navbar')

   document.body.addEventListener('click', e => {
      if (navbar.classList.contains('open') && !e.target.closest('.navbar__list') && !e.target.closest('.burger')) {
         navbar.classList.remove('open')
      }

      if (e.target.closest('.burger')) {
         navbar.classList.toggle('open')
      }
   })
}
