import template from './template.js'

/**
 * @param scroll : boolean, enables scroll bar if true
 * @param height : height you want the scroll box to be
 * @param width : width you want the scroll box to be
 */

export class Box extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.getElementById('box').innerHTML = this.innerHTML

    this.shadowRoot.querySelector('style').innerText += '#box {width:' + (this.getAttribute('width') || '300') + 'px;height:' + (this.getAttribute('height') || '500') + 'px;}'

    if (this.getAttribute('scrollable') === 'true') {
      let height = +getComputedStyle((this.shadowRoot.getElementById('box'))).borderTopWidth.slice(0, -2) * 2 + this.shadowRoot.getElementById('box').clientHeight
      this.shadowRoot.getElementById('container').innerHTML += '<wo-scrollBar id="scroll" height=' + height + '></wo-scrollBar>'
      this.shadowRoot.querySelector('style').innerText += 'wo-scrollBar {display: inline-block;}'
    }
  }
}
