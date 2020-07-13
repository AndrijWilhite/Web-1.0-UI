import template from './template.js'
import menu from './siteMap.js'

/**
 * @param height : sets the height
 * @param width : sets the width
 */
export class SiteExplorer extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const root = this

    this.shadowRoot.querySelector('style').innerText += `
        #container {
            width:${this.getAttribute('width') || '300'}px;
            height:${this.getAttribute('height') || '300'}px;
        }
    `
    function toggle (parent) {
      let childList = root.shadowRoot.getElementById(parent).childNodes
      childList.forEach(element => {
        if (element.className) {
          if (element.className.includes('hidden')) {
            element.classList.remove('hidden')
            element.classList.add('visible')
          } else {
            element.classList.remove('visible')
            element.classList.add('hidden')
          }
        }
      })
    }

    function buildTree (key, parent) {
      if (key.sub) {
        root.shadowRoot.getElementById(parent).innerHTML += '<div id="wrapper" class="hidden test" ><button id="' + key.name + 'Btn" style="display:inline-flex"></button><div id="' + key.name + '">' + key.name + '</div></div>'

        key.sub.forEach(item => {
          buildTree(item, key.name)
        })
      } else {
        root.shadowRoot.getElementById(parent).innerHTML += '<div class="hidden"><div class="file"></div><div id="' + key.name + '" >' + key.name + '</div></div>'
      }
    }

    Object.keys(menu).forEach(parent => {
      root.shadowRoot.getElementById('container').innerHTML += '<div id="wrapper"><button id="' + parent + 'Btn"></button><div id="' + parent + '">' + parent + '</div></div>'

      menu[parent].forEach(item => {
        buildTree(item, parent)
      })
    })

    this.shadowRoot.addEventListener('click', (e) => {
      if (e.target.nodeName === 'BUTTON') {
        toggle(e.target.id.slice(0, -3))
      }
    })
  }
}
