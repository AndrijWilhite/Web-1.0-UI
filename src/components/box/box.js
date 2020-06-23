import template from './template.js'

/**
 * @param scroll : boolean
 */

export class Box extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    console.log(this.getAttribute('scrollable'))
    console.log(this.shadowRoot.getElementById('box').clientHeight)

    if (this.getAttribute('scrollable') === 'true') {
      this.shadowRoot.getElementById('container').innerHTML += '<wo-scrollBar id="scroll" height=' + this.shadowRoot.getElementById('box').clientHeight + '></wo-scrollBar>'
      this.shadowRoot.querySelector('style').innerText += 'wo-scrollBar {display: inline-block;}'
    }

  }
}
