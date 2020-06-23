import template from './template.js'

/**
 *
 */
export class ScrollBar extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    console.log(this.shadowRoot.getElementById('track').clientHeight)

    var mousePosition
    var offset = [0, 0]
    var div = this.shadowRoot.getElementById('slider')
    var isDown = false

    div.addEventListener('mousedown', function (e) {
      isDown = true
      offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
      ]
    }, true)

    document.addEventListener('mouseup', function () {
      isDown = false
    }, true)

    document.addEventListener('mousemove', function (event) {
      event.preventDefault()
      if (isDown) {
        mousePosition = {
          y: event.clientY
        }
        div.style.top = (mousePosition.y + offset[1]) + 'px'
      }
    }, true)
  }
}
