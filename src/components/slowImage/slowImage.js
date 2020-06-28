import template from './template.js'

/**
 * @param height : sets the height of the scroll bar
 * @BUG slider is sometimes 'sticky'
 */
export class SlowImage extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.getElementById('container').innerHTML += '<img src="' + this.getAttribute('src') + '" alt="' + (this.getAttribute('alt' || 'NO ALT GIVEN')) + '" >'

  }
}
