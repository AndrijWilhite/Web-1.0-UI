import template from './template.js'

/**
 * @param height : sets the height of the scroll box
 * @param width : sets the width of the scroll box
 * @param bottom : bool if passed aranges to buttons to the bottom of the scroll bar
 * @BUG slider is sometimes 'sticky'
 */
export class Scrollable extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.getElementById('content').innerHTML = this.innerHTML

    const scale = 15

    // set the scale for elements
    this.shadowRoot.querySelector('style').innerText += `
    #container{width:${this.getAttribute('width')}px; height:${this.getAttribute('height')}px;}
    #content{width:${(this.getAttribute('width') - scale)}px; height:${this.getAttribute('height')}px;}
    .scale{width:${scale}px; height:${scale}px;}
    #scrollBar {height:${this.getAttribute('height')}px;}
    #track {height:${(this.getAttribute('height') - (scale * 2))}px;}
    `

    // sets the slider height to 10% of track, defaults to 15px if its smaller
    const sliderHeightSet = (this.shadowRoot.getElementById('track').clientHeight * 0.1) > 15 ? (this.shadowRoot.getElementById('track').clientHeight * 0.1) : 15
    this.shadowRoot.querySelector('style').innerText += `
    #slider{width:${scale}px;height:${sliderHeightSet}px;}
    `
    if (this.getAttribute('bottom') !== null) {
      this.shadowRoot.querySelector('style').innerText += `
        #scrollBar {display: flex !important;flex-flow: column !important;margin-top: 3px !important;}
        #track{order: 1 !important; margin-top: -3px !important;}
        button{order: 2!important;}
        #up-btn {margin-top: 1px !important;}
    `
    }
    // declarations
    const root = this
    var slider = this.shadowRoot.getElementById('slider')
    var track = this.shadowRoot.getElementById('track')
    let max = track.offsetTop + parseInt(getComputedStyle(track).height, 10) - parseInt(getComputedStyle(slider).height, 10)
    const maxHeight = root.shadowRoot.getElementById('content').scrollHeight - root.shadowRoot.getElementById('content').clientHeight

    document.mouseState = 1
    slider.mouseState = 1
    slider.lastMousePosY = null
    slider.style.top = track.offsetTop + 'px'
    track.style.top = track.offsetTop + 'px'
    slider.proposedNewPosY = parseInt(slider.style.top, 10)

    // calculates the percentage for using against the scroll height to set the view
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

    // TODO: this may the source of sticky issue, should find a better way
    slider.onmousemove = function (e) {
      if ((document.mouseState === 0) && (slider.mouseState === 0)) {
        slider.proposedNewPosY = parseInt(slider.style.top, 10) + e.pageY - slider.lastMousePosY
        if (slider.proposedNewPosY < parseInt(track.style.top, 10)) {
          slider.style.top = track.style.top
        } else if (slider.proposedNewPosY > max) {
          slider.style.top = max + 'px'
        } else {
          slider.style.top = slider.proposedNewPosY + 'px'
          root.shadowRoot.getElementById('content').scrollTop = maxHeight * calcPercentage()
        }
        slider.lastMousePosY = e.pageY
      }
    }

    // up button logic
    this.shadowRoot.getElementById('up-btn').onclick = () => {
      slider.style.top = track.style.top
      this.shadowRoot.getElementById('content').scrollTop = 0
    }

    // down button logic
    this.shadowRoot.getElementById('down-btn').onclick = () => {
      slider.style.top = max + 'px'
      this.shadowRoot.getElementById('content').scrollTop = maxHeight
    }
  }
}
