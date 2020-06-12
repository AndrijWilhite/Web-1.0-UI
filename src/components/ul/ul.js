import template from './template.js'

/**
 * @param items : the <li> to be inserted
 * @param size : the size of the button s,m,lrg,xl
 */

export class UList extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // this.shadowRoot.querySelector('button').innerText = this.innerHTML || this.getAttribute('txt') || 'Submit'
    this.shadowRoot.querySelector('h4').innerText = this.getAttribute('title')


    var items = this.getAttribute('items')
    if (typeof (items) !== 'array') {
      JSON.parse(items).forEach(item => {
        this.shadowRoot.querySelector('ul').innerHTML += '<li>' + item.data + '</li>'
      })
    } else {
      items.foreach(item => {
        this.shadowRoot.querySelector('ul').innerHTML += '<li>' + item + '</li>'
      })
    }

    // // this.shadowRoot.querySelector('button').setAttribute('type', this.getAttribute('type'))
    // this.shadowRoot.querySelector('button').setAttribute('size', this.getAttribute('size'))
  }
}
