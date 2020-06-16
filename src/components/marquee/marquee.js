import template from './template.js'

/**
 *@info display HTML
 *@TODO ensure other code types, add param for adding different line colors
 *@param title : adds a title to the code snippet
 */

export class Marquee extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    console.log(this.innerHTML)
    console.log(this.shadowRoot.querySelectorAll('.rightTI'))

    this.shadowRoot.querySelector('div').innerHTML = this.innerHTML
  }
}
