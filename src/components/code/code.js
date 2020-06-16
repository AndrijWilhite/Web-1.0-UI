import template from './template.js'

/**
 *@info display HTML
 *@TODO ensure other code types, add param for adding different line colors
 *@param title : adds a title to the code snippet
 */

export class Code extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('title')

    this.shadowRoot.querySelector('code').innerHTML = this.innerHTML.replace(/</g,'&lt')
  }
}
