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

    // console.log('slider pos: ', parseInt(slider.style.top, 10))
    const startPos = parseInt(track.style.top, 10)
    console.log('start: ', startPos)
    var root = this.shadowRoot

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
          console.log('******************')

          let curr = parseInt(slider.style.top, 10)
          let start = startPos
          let max = getAtInt(track, 'top') + getAtInt(track, 'height') - getAtInt(slider, 'height')
          let diff = max - start
          let avg = (start + max) / 2
        //   // console.log(getAtInt(track, 'top') + getAtInt(track, 'height'))
        //   console.log('start pos:', startPos)
        //   console.log('max pos: ', max)
        //   console.log('slider pos: ', curr)
        //   console.log('test: ', start + getAtInt(slider, 'height'))

        // //   console.log(max - start - getAtInt(slider, 'height'))
        // console.log(max - start)

        //   //   console.log('diff: ', diff)
        //   //   console.log('avg: ', avg)
        //   //   console.log(curr / (max-start))

          var parentPos = root.getElementById('track').getBoundingClientRect()

          var childPos = root.getElementById('slider').getBoundingClientRect()

          let x = childPos.top - parentPos.top
          let y = max - start

          console.log( (x/y)*100 )

          slider.style.top = slider.proposedNewPosY + 'px'
        }
        slider.lastMousePosY = e.pageY
      }
    }
    // var parentPos = this.shadowRoot.getElementById('track').getBoundingClientRect()

    // var childPos = this.shadowRoot.getElementById('slider').getBoundingClientRect()

    // var relativePos = {}

    // relativePos.top = childPos.top - parentPos.top,
    // relativePos.right = childPos.right - parentPos.right,
    // relativePos.bottom = childPos.bottom - parentPos.bottom,
    // relativePos.left = childPos.left - parentPos.left

    // console.log(relativePos)


    // up and down button logic
    this.shadowRoot.getElementById('up-btn').onclick = () => {
      slider.style.top = track.offsetTop - slider.clientTop + 'px'
      this.getRootNode().host.shadowRoot.getElementById('box').scrollTop = 0
    }
    this.shadowRoot.getElementById('down-btn').onclick = () => {
      slider.style.top = getAtInt(track, 'top') + getAtInt(track, 'height') - getAtInt(slider, 'height') + 'px'
      let height = this.getRootNode().host.shadowRoot.getElementById('box').scrollHeight
      console.log(height)
      this.getRootNode().host.shadowRoot.getElementById('box').scrollTop = height
    }

    // box view position logic
    // let boxHeight = this.getRootNode().host.shadowRoot.getElementById('box').scrollHeight
    // let a = slider.proposedNewPosY
    // console.log('A', a)
  }
  connectedCallback () {

  }
}
