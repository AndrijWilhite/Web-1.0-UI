import template from './template.js'

/**
 * @param scroll : boolean
 */

export class Box extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    if (this.getAttribute('scrollable') === 'true') {
      let height = +getComputedStyle((this.shadowRoot.getElementById('box'))).borderTopWidth.slice(0, -2) * 2 + this.shadowRoot.getElementById('box').clientHeight
      this.shadowRoot.getElementById('container').innerHTML += '<wo-scrollBar id="scroll" height=' + height + '></wo-scrollBar>'
      this.shadowRoot.querySelector('style').innerText += 'wo-scrollBar {display: inline-block;}'
    }
  }
  connectedCallback () {

  }
}
