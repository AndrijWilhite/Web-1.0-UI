import template from './template.js'

/**
 * @param scroll : boolean
 */

export class Box extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // console.log(this.shadowRoot.getElementById('box').scrollHeight)

    if (this.getAttribute('scrollable') === 'true') {
      let height = +getComputedStyle((this.shadowRoot.getElementById('box'))).borderTopWidth.slice(0, -2) * 2 + this.shadowRoot.getElementById('box').clientHeight
      this.shadowRoot.getElementById('container').innerHTML += '<wo-scrollBar id="scroll" height=' + height + '></wo-scrollBar>'
      this.shadowRoot.querySelector('style').innerText += 'wo-scrollBar {display: inline-block;}'
    }
  }
  connectedCallback () {
    // this.shadowRoot.getElementById('up-btn').onclick(() => {
    //   this.shadowRoot.getElementById('box').scrollTop = 0
    // })
    // this.shadowRoot.getElementById('box').scrollTop = 1000
    // let a = this.shadowRoot.getElementById('up-btn')
    // let a = this.shadowRoot.hasChildNodes()
    // console.log(a)
  }
}
