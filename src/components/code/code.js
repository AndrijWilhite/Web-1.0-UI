import template from './template.js'

/**
 *
 */

export class Code extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('code').innerHTML = this.innerHTML.replace(/</g,'&lt')

  }
}
