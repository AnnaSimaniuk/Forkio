'use strict'

export const validateEmail = () => {
   const btn = document.querySelector('.footer__newsletter--btn')
   const input = document.querySelector('.footer__newsletter--input')
   const EMAIL_REGEXP =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
   const hint = document.querySelector('.footer__newsletter--hint')
   const hintFalse = document.querySelector('.footer__newsletter--hint_false')
   const clientsEmails = []

   const validateEmail = email => {
      if (email.match(EMAIL_REGEXP)) {
         hint.classList.add('show_hint')
         clientsEmails.push(email)
         setTimeout(() => {
            hint.classList.remove('show_hint')
            input.value = ''
         }, 1000)
      } else {
         hintFalse.classList.add('show_hint')
      }

      if (email === '') {
         hint.classList.remove('show_hint')
         hintFalse.classList.remove('show_hint')
      }
   }

   btn.addEventListener('click', e => {
      const email = input.value
      validateEmail(email)
   })

   input.addEventListener('focus', () => {
      hintFalse.classList.remove('show_hint')
   })
}
