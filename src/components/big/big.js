import template from './template.js'

/**
 * Creats a wo-big tag to remove the deprecated <big> tag
 */

export class Big extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('p').append(this.innerHTML)
  }
}
