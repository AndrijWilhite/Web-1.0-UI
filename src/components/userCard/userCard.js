import template from './template.js'

export class UserCard extends HTMLElement {
  constructor () {
    super()

    this.showInfo = true

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
  }

  toggleInfo () {
    this.showInfo = !this.showInfo

    const info = this.shadowRoot.querySelector('.info')
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info')


    if (this.showInfo) {
      info.style.display = 'block'
      toggleBtn.innerText = 'Hide Info'
    } else {
      toggleBtn.innerHTML = 'Show Info'

    }
  }

  connectedCallback () {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo())
  }

  disconnectedCallback () {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener()
  }
}
