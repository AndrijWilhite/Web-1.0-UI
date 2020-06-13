import template from './template.js'

/**
 * @param value : the current value of the progress bar
 * @param max : the max value of the progress bar
 * @param title : the title for the bar
 * @param showPercent : boolean, where to the the info via text below the progress bar
 */

export class Progress extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // this.shadowRoot.querySelector('button').innerText = this.innerHTML || this.getAttribute('txt') || 'Submit'
    // this.shadowRoot.querySelector('button').setAttribute('size', this.getAttribute('size'))

    this.shadowRoot.querySelector('progress').setAttribute('value', this.getAttribute('value') )
    this.shadowRoot.querySelector('progress').setAttribute('max', this.getAttribute('max') )

  }
}
