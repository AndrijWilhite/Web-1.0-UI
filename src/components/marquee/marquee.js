import template from './template.js'

/**
 * @param width: determines marquee width
 * @param height: determines marquee height
 * @param speed: speed in secoonds that the text moves
 * @param bColor: sets the background color
 * @param tColor: sets the text color
 */

export class Marquee extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('div').innerHTML = this.innerHTML


    this.shadowRoot.querySelector('style').innerText += 'div {width: ' + this.getAttribute('width') + 'px;}'
    this.shadowRoot.querySelector('style').innerText += 'div {height: ' + this.getAttribute('height') + 'px;}'

    if (this.getAttribute('speed')) {
      this.shadowRoot.querySelector('style').innerText += '.marq {animation: marquee ' + this.getAttribute('speed') + 's linear infinite}'
    } else {
      this.shadowRoot.querySelector('style').innerText += '.marq {animation: marquee 10s linear infinite;}'
    }

    this.shadowRoot.querySelector('style').innerText += '.marq {background: ' + this.getAttribute('bColor') + '}'
    this.shadowRoot.querySelector('style').innerText += '.marq {color: ' + this.getAttribute('tColor') + '}'


  }
}
