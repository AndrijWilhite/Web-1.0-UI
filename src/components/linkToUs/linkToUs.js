import template from './template.js'

/**
 * @param width : set the width
 * @param height : set the height
 * @param lc : left box color; defaults lightgray
 * @param rc : right boox color defaults white
 * @param main : bool; determines if the link should go to home page or current page; default current
 * @param msg : string;  the anchor text default 'Check This Out!'
 * @param callout : string; what you want the left box to say; Default 'Link To Us'
 */
export class LinkToUs extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const width = this.getAttribute('width') || '300'
    const height = this.getAttribute('height') || '100'
    let location

    if (this.getAttribute('main') !== null) {
      location = window.location.hostname
    } else {
      location = window.location.href
    }

    this.shadowRoot.querySelector('style').innerHTML += `
    #container {
        width: ${width}px;
        height: ${height}px;
    }
    #left {
        background-color: ${this.getAttribute('lc') || 'lightgray'};
    }
    #right {
        background-color: ${this.getAttribute('rc') || 'white'};
    }
    `

    this.shadowRoot.getElementById('left').innerText = this.getAttribute('callout') || 'Link To Us'
    this.shadowRoot.getElementById('right').innerText = `<a href="${location}">\n${this.getAttribute('msg') || 'Check this Out!'}\n</a>`
  }
}
