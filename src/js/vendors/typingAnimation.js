'use strict'

import TypeIt from 'typeit'

export const typingAnimation = new TypeIt('.screen__row-1', {
   speed: 1,
   waitUntilVisible: true,
})

   .type(
      '<span class="const">import <span class="attribute">{ <span class="base">useState</span> } </span> from</span> <span class="string">`react`</span>'
   )
   .pause(170)
   .break()
   .break()
   .type('<span class="const">import <span class="base">Button</span> from</span><span class="string"> `./components/Button`</span>')
   .break()
   .type('<span class="const">import</span><span class="base"> Counter </span>')
   .type('<span class="const">from</span> <span class="string">`./components/Counter`</span></span>')
   .pause(170)
   .break()
   .break()
   .type('<span class="const">const</span><span class="base"> App </span><span class="attribute"> = () => { </span>')
   .break()
   .type('<span class="padding const">const </span> <span class="attribute">[count <span class="const">,</span> setCount] =</span>')
   .type(' <span class="base">useState</span><span class="attribute">(0)</span>')
   .break()
   .break()
   .type(
      '<span class="const padding">const</span> <span class="base">incrementCount</span><span class="attribute"> = () => setCount(count + 1) </span>'
   )
   .pause(170)
   .break()
   .break()
   .type('<span class="const padding ">return</span><span class="attribute"> ( </span>')
   .break()
   .type(
      '<span class="base padding-1"><span class="base"> <</span>div</span> <span class="attribute">className</span><span class="string"> ="App"</span><span class="base">></span>'
   )
   .break()
   .type(
      '<span class="base padding-2"><</span><span class="component">Counter</span> <span class="attribute">count</span><span class="string">=</span><span class="base">{<span class="attribute">count</span></span><span class="base">} /></span>'
   )
   .break()
   .type(
      '<span class="base padding-2"><<span class="component">Button</span> <span class="attribute">onClick</span><span class="string">=</span>{incrementCount} /></span>'
   )

   .break()
   .type('<span class="base padding-1"><span class="base"><</span>div></span>')
   .break()
   .type('<span class="attribute padding">)</span>')
   .break()
   .type('<span class="attribute">}</span>')
   .pause(300)
   .break()
   .break()
   .type('<span class="const">export default <span class="base">App</span></span>')
