import template from './template.js'

/**
 * @param height : sets the height of the scroll bar
 * @BUG slider is sometimes 'sticky'
 */
export class ScrollBar extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    // set the height
    const scaleHeight = this.getAttribute('height')
    const buttonHeight = (+getComputedStyle((this.shadowRoot.getElementById('down-btn'))).borderTopWidth.slice(0, -2) * 2) + this.shadowRoot.getElementById('down-btn').clientHeight
    this.shadowRoot.querySelector('style').innerText += '.scrollBar {height:' + scaleHeight + 'px;}'
    this.shadowRoot.querySelector('style').innerText += '#track {height:' + (scaleHeight - (buttonHeight * 2)) + 'px;}'

    // declarations
    const root = this
    const height = root.getRootNode().host.shadowRoot.getElementById('box').scrollHeight - root.getRootNode().host.shadowRoot.getElementById('box').clientHeight
    var slider = this.shadowRoot.getElementById('slider')
    var track = this.shadowRoot.getElementById('track')
    let max = track.offsetTop + track.clientHeight - slider.clientHeight

    document.mouseState = 1
    slider.mouseState = 1
    slider.lastMousePosY = null
    slider.proposedNewPosY = parseInt(slider.style.top, 10)

    slider.style.top = track.offsetTop - slider.clientTop + 'px'
    slider.style.left = track.offsetLeft - slider.clientLeft + 'px'
    slider.style.height = slider.clientHeight + 'px'
    slider.style.width = slider.clientWidth + 'px'
    track.style.top = track.offsetTop + 'px'
    track.style.left = track.offsetLeft + 'px'
    track.style.height = track.clientHeight + 'px'
    track.style.width = track.clientWidth + 'px'

    var getAtInt = function (obj, attr) {
      return parseInt(obj.style[attr], 10)
    }
    var calcPercentage = function () {
      return ((root.shadowRoot.getElementById('slider').getBoundingClientRect().top - root.shadowRoot.getElementById('track').getBoundingClientRect().top) / (max - track.offsetTop)).toFixed(2)
    }

    // slider and track logic
    slider.onmousedown = function (e) {
      slider.lastMousePosY = e.pageY
      slider.mouseState = 0
      document.mouseState = 0
    }

    slider.onmouseup = function (e) {
      slider.mouseState = 1
      document.mouseState = 1
    }

    slider.onmousemove = function (e) {
      if ((document.mouseState === 0) && (slider.mouseState === 0)) {
        slider.proposedNewPosY = getAtInt(slider, 'top') + e.pageY - slider.lastMousePosY
        if (slider.proposedNewPosY < getAtInt(track, 'top')) {
          slider.style.top = track.style.top
        } else if (slider.proposedNewPosY > max) {
          slider.style.top = max + 'px'
        } else {
          slider.style.top = slider.proposedNewPosY + 'px'
          root.getRootNode().host.shadowRoot.getElementById('box').scrollTop = height * calcPercentage()
        }
        slider.lastMousePosY = e.pageY
      }
    }

    // up and down button logic
    this.shadowRoot.getElementById('up-btn').onclick = () => {
      slider.style.top = track.offsetTop - slider.clientTop + 'px'
      this.getRootNode().host.shadowRoot.getElementById('box').scrollTop = 0
    }
    this.shadowRoot.getElementById('down-btn').onclick = () => {
      slider.style.top = track.offsetTop + track.clientHeight - slider.clientHeight + 'px'
      this.getRootNode().host.shadowRoot.getElementById('box').scrollTop = height
    }
  }
}
