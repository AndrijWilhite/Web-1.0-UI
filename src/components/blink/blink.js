import template from './template.js'

/**
 *@param
 */

export class Blink extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.getElementById('content').innerText = this.innerHTML
  }
}
