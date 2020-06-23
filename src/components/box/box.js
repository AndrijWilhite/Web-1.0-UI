import template from './template.js'

/**
 * 
 */

export class Box extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // this.shadowRoot.querySelector('div').innerHTML = this.innerHTML

    // // width and height
    // this.shadowRoot.querySelector('style').innerText += 'div {width: ' + this.getAttribute('width') + 'px;}'
    // this.shadowRoot.querySelector('style').innerText += 'div {height: ' + this.getAttribute('height') + 'px;}'

    // // colors
    // this.shadowRoot.querySelector('style').innerText += '.on {background: ' + (this.getAttribute('c1') || 'red') + ';}'
    // this.shadowRoot.querySelector('style').innerText += '.off {background: ' + (this.getAttribute('c2') || 'blue') + ';}'
    // this.shadowRoot.querySelector('style').innerText += '#flashBanner {color: ' + this.getAttribute('tColor') + '!important}'

    // let switched = false

    // window.setInterval(() => {
    //   if (switched === false) {
    //     this.shadowRoot.getElementById('flashBanner').classList.remove('off')
    //     this.shadowRoot.getElementById('flashBanner').classList.add('on')
    //     switched = true
    //   } else {
    //     this.shadowRoot.getElementById('flashBanner').classList.remove('on')
    //     this.shadowRoot.getElementById('flashBanner').classList.add('off')
    //     switched = false
    //   }
    // }, this.getAttribute('speed') || 1000)
  }
}
