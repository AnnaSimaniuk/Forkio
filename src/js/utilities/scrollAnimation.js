'use strict'

const animItems = document.querySelectorAll('.anim-item')

const offset = el => {
   const rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop,
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

export const scrollAnimation = () => {
   animItems.forEach(item => {
      const animStart = 2.5,
         itemHeight = item.offsetHeight,
         itemOffset = offset(item).top

      let itemPoint = innerHeight - itemHeight / animStart

      itemHeight > innerHeight ? (itemPoint = innerHeight - innerHeight / animStart) : ''

      scrollY > itemOffset - itemPoint && scrollX < itemOffset + itemHeight
         ? item.classList.add('show-up')
         : !item.classList.contains('once')
         ? item.classList.remove('show-up')
         : ''
   })
}

animItems.length > 0 ? window.addEventListener('scroll', scrollAnimation) : ''
