import template from './template.js'

/**
 * @param width : set the width
 * @param height : set the height
 * @param icon : set a custom icon ; defaults to back arrow;
 */
export class BackButton extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('style').innerHTML += `
      button {
        width: ${this.getAttribute('width') || '40'}px;
        height: ${this.getAttribute('height') || '40'}px;
      }`

    if (this.getAttribute('icon')) {
      this.shadowRoot.querySelector('style').innerHTML += `
      button {
        background-image: url(${this.getAttribute('icon')}) !important;
        -webkit-transform: none !important;
        background-size: contain;
       }`
    }

    function goBack () {
      window.history.go(-1)
    }
    this.shadowRoot.querySelector('button').addEventListener('click', goBack)
  }
}
