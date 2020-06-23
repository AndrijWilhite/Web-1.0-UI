import template from './template.js'

/**
 *
 */
export class ScrollBar extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    var slider = this.shadowRoot.getElementById('slider')
    var container = this.shadowRoot.getElementById('track')
    document.mouseState = 'up'
    slider.mouseState = 'up'
    slider.lastMousePosY = null
    slider.lastMousePosX = null
    slider.proposedNewPosY = parseInt(slider.style.top, 10) // converts '10px' to 10
    slider.proposedNewPosX = parseInt(slider.style.left, 10)


    slider.style.top = container.offsetTop - slider.clientTop + 'px'
    slider.style.left = container.offsetLeft - slider.clientLeft + 'px'
    slider.style.height = slider.clientHeight + 'px'
    slider.style.width = slider.clientWidth + 'px'
    container.style.top = container.offsetTop + 'px'
    container.style.left = container.offsetLeft + 'px'
    container.style.height = container.clientHeight + 'px'
    container.style.width = container.clientWidth + 'px'

    document.onmousedown = function () {
      document.mouseState = 'down'
    }

    document.onmouseup = function () {
      document.mouseState = 'up'
      slider.mouseState = 'up'
    }
    slider.onmousedown = function (e) {
      slider.lastMousePosY = e.pageY
      slider.lastMousePosX = e.pageX
      slider.mouseState = 'down'
      document.mouseState = 'down'
    }

    slider.onmouseup = function (e) {
      slider.mouseState = 'up'
      document.mouseState = 'up'
    }
    var getAtInt = function getAtInt (obj, attrib) {
      return parseInt(obj.style[attrib], 10)
    }

    document.onmousemove = function (e) {
      if ((document.mouseState === 'down') && (slider.mouseState === 'down')) {
        slider.proposedNewPosY = getAtInt(slider, 'top') + e.pageY - slider.lastMousePosY
        slider.proposedNewPosX = getAtInt(slider, 'left') + e.pageX - slider.lastMousePosX

        if (slider.proposedNewPosY < getAtInt(container, 'top')) {
          slider.style.top = container.style.top
        } else if (slider.proposedNewPosY > getAtInt(container, 'top') + getAtInt(container, 'height') - getAtInt(slider, 'height')) {
          slider.style.top = getAtInt(container, 'top') + getAtInt(container, 'height') - getAtInt(slider, 'height') + 'px'
        } else {
          slider.style.top = slider.proposedNewPosY + 'px'
        }
        if (slider.proposedNewPosX < getAtInt(container, 'left')) {
          slider.style.left = container.style.left
        } else if (slider.proposedNewPosX > getAtInt(container, 'left') + getAtInt(container, 'width') - getAtInt(slider, 'width')) {
          slider.style.left = getAtInt(container, 'left') + getAtInt(container, 'width') - getAtInt(slider, 'width') + 'px'
        } else {
          slider.style.left = slider.proposedNewPosX + 'px'
        }
        slider.lastMousePosY = e.pageY
        slider.lastMousePosX = e.pageX
      }
    }
  }
}
