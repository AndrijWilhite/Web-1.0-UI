import template from './template.js'

/**
 * @param txt : the text displayed within the button
 * @param size : the size of the button s,m,lrg,xl
 */

export class Button extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('button').innerText = this.innerHTML || this.getAttribute('txt') || 'Submit'
    this.shadowRoot.querySelector('button').setAttribute('size', this.getAttribute('size'))
  }
}
