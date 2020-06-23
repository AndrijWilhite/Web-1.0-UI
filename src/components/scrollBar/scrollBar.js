import template from './template.js'

/**
 *
 */
export class ScrollBar extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    // slider and track logic
    var slider = this.shadowRoot.getElementById('slider')
    var track = this.shadowRoot.getElementById('track')
    document.mouseState = 'up'
    slider.mouseState = 'up'
    slider.lastMousePosY = null
    slider.lastMousePosX = null
    slider.proposedNewPosY = parseInt(slider.style.top, 10) // converts '10px' to 10
    slider.proposedNewPosX = parseInt(slider.style.left, 10)

    slider.style.top = track.offsetTop - slider.clientTop + 'px'
    slider.style.left = track.offsetLeft - slider.clientLeft + 'px'
    slider.style.height = slider.clientHeight + 'px'
    slider.style.width = slider.clientWidth + 'px'
    track.style.top = track.offsetTop + 'px'
    track.style.left = track.offsetLeft + 'px'
    track.style.height = track.clientHeight + 'px'
    track.style.width = track.clientWidth + 'px'

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
    slider.onmousemove = function (e) {
      if ((document.mouseState === 'down') && (slider.mouseState === 'down')) {
        slider.proposedNewPosY = getAtInt(slider, 'top') + e.pageY - slider.lastMousePosY
        slider.proposedNewPosX = getAtInt(slider, 'left') + e.pageX - slider.lastMousePosX

        if (slider.proposedNewPosY < getAtInt(track, 'top')) {
          slider.style.top = track.style.top
        } else if (slider.proposedNewPosY > getAtInt(track, 'top') + getAtInt(track, 'height') - getAtInt(slider, 'height')) {
          slider.style.top = getAtInt(track, 'top') + getAtInt(track, 'height') - getAtInt(slider, 'height') + 'px'
        } else {
          slider.style.top = slider.proposedNewPosY + 'px'
        }
        if (slider.proposedNewPosX < getAtInt(track, 'left')) {
          slider.style.left = track.style.left
        } else if (slider.proposedNewPosX > getAtInt(track, 'left') + getAtInt(track, 'width') - getAtInt(slider, 'width')) {
          slider.style.left = getAtInt(track, 'left') + getAtInt(track, 'width') - getAtInt(slider, 'width') + 'px'
        } else {
          slider.style.left = slider.proposedNewPosX + 'px'
        }
        slider.lastMousePosY = e.pageY
        slider.lastMousePosX = e.pageX
      }
    }

    // up and down button logic
    this.shadowRoot.getElementById('up-btn').onclick = () => {
      slider.style.top = track.offsetTop - slider.clientTop + 'px'
    }
    this.shadowRoot.getElementById('down-btn').onclick = () => {
      slider.style.top = getAtInt(track, 'top') + getAtInt(track, 'height') - getAtInt(slider, 'height') + 'px'
    }
  }
}
