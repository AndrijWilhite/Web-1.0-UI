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
    const trackHeight = scaleHeight - (buttonHeight * 2)

    this.shadowRoot.querySelector('style').innerText += '.scrollBar {height:' + scaleHeight + 'px;}'
    this.shadowRoot.querySelector('style').innerText += '#track {height:' + trackHeight + 'px;}'

    // slider and track logic
    var slider = this.shadowRoot.getElementById('slider')
    var track = this.shadowRoot.getElementById('track')
    document.mouseState = 'up'
    slider.mouseState = 'up'
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

    slider.onmousedown = function (e) {
      slider.lastMousePosY = e.pageY
      slider.mouseState = 'down'
      document.mouseState = 'down'
    }

    slider.onmouseup = function (e) {
      slider.mouseState = 'up'
      document.mouseState = 'up'
    }
    var getAtInt = function getAtInt (obj, attr) {
      return parseInt(obj.style[attr], 10)
    }
    slider.onmousemove = function (e) {
      if ((document.mouseState === 'down') && (slider.mouseState === 'down')) {
        slider.proposedNewPosY = getAtInt(slider, 'top') + e.pageY - slider.lastMousePosY

        if (slider.proposedNewPosY < getAtInt(track, 'top')) {
          slider.style.top = track.style.top
        } else if (slider.proposedNewPosY > getAtInt(track, 'top') + getAtInt(track, 'height') - getAtInt(slider, 'height')) {
          slider.style.top = getAtInt(track, 'top') + getAtInt(track, 'height') - getAtInt(slider, 'height') + 'px'
        } else {
          slider.style.top = slider.proposedNewPosY + 'px'
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
      slider.style.top = getAtInt(track, 'top') + getAtInt(track, 'height') - getAtInt(slider, 'height') + 'px'
      let height = this.getRootNode().host.shadowRoot.getElementById('box').scrollHeight
      this.getRootNode().host.shadowRoot.getElementById('box').scrollTop = height
    }
  }
  connectedCallback () {
    //   let a = this.shadowRoot.getElementById('scrollBar').getRootNode().host
    // let a = this.shadowRoot.parentElement
    // let a = this.shadowRoot.getRootNode().
    // let a = this.shadowRoot.closest('wo-box')
    // let a = this.shadowRoot.getElementById('scrollBar').getRootNode.host

    // this.shadowRoot.getElementById('up-btn').onclick(() => {
    // //   this.shadowRoot.getElementById('box').scrollTop = 0
    // //   this.getRootNode().host.shadowRoot.getElementById('box').scrollTop = 0
    // })
    // let a = this.getRootNode().host.shadowRoot.getElementById('box').scrollTop = 2000
    // console.log(a)
  }
}
