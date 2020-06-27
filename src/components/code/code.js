import template from './template.js'

/**
 *@info display HTML
 *@TODO ensure other code types, add param for adding different line colors
 *@param title : adds a title to the code snippet
 */

export class Code extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('title')
    const text = this.innerHTML.split('\n')

    this.shadowRoot.getElementById('container').innerHTML = '<wo-box height="' + (this.getAttribute('height') || 'auto') + '" width="' + (this.getAttribute('width') || 'auto') + '"></wo-box>'
    this.shadowRoot.querySelector('wo-box').innerHTML = `<pre><code></code></pre>`
 
    this.shadowRoot.querySelector('wo-box').innerHTML += `<style>
    #box{background-color: transparent !important; border:none !important;}
    #grey{background:lightgray;}
    #white{bacground: white;}
    .line{width: 100%;}
    span{min-width:100%; min-height:auto; display:block;}
    </style>`

    let switcher = false
    text.forEach((item) => {
      if (item !== '' && item !== undefined) {
        this.shadowRoot.querySelector('code').innerHTML += '<span class="line" id="' + (switcher === false ? 'grey' : 'white') + '">' + item.replace(/</g, '&lt').trim() + '</span>'
        switcher = !switcher
      }
    })
  }
}
