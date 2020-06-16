import template from './template.js'

/**
 * Creates a wo-tt tag to remove the deprecated <tt> tag
 */

export class TeleType extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('p').append(this.innerHTML)
  }
}
