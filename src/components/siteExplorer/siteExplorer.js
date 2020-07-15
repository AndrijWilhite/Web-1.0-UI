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

        if (element.nodeName === 'IMG') {
          if (element.id === 'closedFolder') {
            element.id = 'openFolder'
          } else {
            element.id = 'closedFolder'
          }
        }
      })
    }

    function buildTree (key, parent, last) {
      if (key.sub) {
        root.shadowRoot.getElementById(parent).innerHTML += `
        <div id="wrapper" class="hidden" >
        <button id="${key.name}Btn" class="${last ? 'plusBottom' : 'plusIcon'}" style="display:flex"></button>
        <div id="${key.name}">
        <img id="closedFolder" align="absbottom"></img>${key.name}</div>
        </div>`

        key.sub.forEach((item, i) => {
          if (key.sub.length === i + 1) {
            buildTree(item, key.name, true)
          } else {
            buildTree(item, key.name)
          }
        })
      } else {
        root.shadowRoot.getElementById(parent).innerHTML += `
        <div class="hidden" style="display:flex">
        <img id="${last ? 'lineBottom' : 'line'}" align="absbottom"></img>
        <div  class="file"></div>
        <a href="${key.src}" id="${key.name}" >${key.name}</a>
        </div>`
      }
    }

    Object.keys(menu).forEach((parent, i) => {
      root.shadowRoot.getElementById('container').innerHTML += `
        <div id="wrapper">
        <button id="${parent}Btn" class="${(Object.keys(menu).length === i + 1) ? 'plusBottom' : 'plusIcon'}"></button>
        <div  id="${parent}">
            <img id="closedFolder" align="absbottom"></img>${parent}</div>
        </div>
        `

      menu[parent].forEach((item, i) => {
        if (menu[parent].length === i + 1) {
          buildTree(item, parent, true)
        } else {
          buildTree(item, parent)
        }
      })
    })

    const iconClass = {
      'plusIcon': 'minusIcon',
      'minusIcon': 'plusIcon',
      'plusBottom': 'minusBottom',
      'minusBottom': 'plusBottom'
    }

    this.shadowRoot.addEventListener('click', (e) => {
      if (e.target.nodeName === 'BUTTON') {
        toggle(e.target.id.slice(0, -3))
        e.target.className = iconClass[e.target.className]
      }
    })
  }
}
