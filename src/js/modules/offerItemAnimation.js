'use strict'

export const offerItemAnimation = () => {
   const addClassName = () => {
      const pricingCards = document.querySelectorAll('.offer-item')
      const offersContainer = document.querySelector('.pricing__offers')
      const selectCard = Array.from(pricingCards).find(card => card.children[0].textContent === 'agency')

      selectCard.classList.add('select')
      offersContainer.addEventListener('mouseenter', e => {
         if (window.innerWidth >= 1240 && e.target === offersContainer) selectCard.classList.remove('select')
      })
      offersContainer.addEventListener('mouseleave', e => {
         if (window.innerWidth >= 1240 && e.target === offersContainer) selectCard.classList.add('select')
      })

      if (window.innerWidth <= 1240) selectCard.classList.add('select')
   }
   addClassName()
   addEventListener('resize', addClassName)
}
