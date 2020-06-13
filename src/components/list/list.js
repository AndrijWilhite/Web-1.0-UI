import template from './template.js'

/**
 * @param items : the <li> to be inserted
 * @param color : the text color for the List
 * @param bp : the bullet point type to be used (square or circle)
 * @param type : either ol or ul is passed, defaults to ul
 */

export class List extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const listType = this.getAttribute('type') || 'ul'

    if (this.getAttribute('type') == 'ol') {
      this.shadowRoot.querySelector('#wo-list').innerHTML = '<ol></ol>'
    } else {
      this.shadowRoot.querySelector('#wo-list').innerHTML = '<ul></ul>'
    }

    this.shadowRoot.querySelector('h4').innerText = this.getAttribute('title')
    this.shadowRoot.querySelector('style').innerText += listType + ', h4 {color:' + this.getAttribute('color') + ';}'
    this.shadowRoot.querySelector('style').innerText += listType + ' {list-style-type:' + this.getAttribute('bullet') + ';}'

    var items = this.getAttribute('items')
    if (!Array.isArray(items)) {
      JSON.parse(items).forEach(item => {
        this.shadowRoot.querySelector(listType).innerHTML += '<li>' + item.data + '</li>'
      })
    } else {
      items.foreach(item => {
        this.shadowRoot.querySelector(listType).innerHTML += '<li>' + item + '</li>'
      })
    }
  }
}
