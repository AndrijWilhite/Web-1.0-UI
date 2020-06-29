import template from './template.js'

/**
 * Make this better some how
 */
export class ShowPage extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    // gets doctype and everything within the html as a string and replaces '<'
    var showPage = () => {
      var newDoc = window.open('')
      let text = (new XMLSerializer().serializeToString(document.doctype) + '\n' + document.body.parentElement.outerHTML).replace(/</g, '&lt')
      newDoc.document.write(`<pre><code>${text}</code></pre>`)
    }

    this.shadowRoot.querySelector('wo-btn').addEventListener('click', showPage)
  }
}
