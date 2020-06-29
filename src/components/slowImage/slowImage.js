import template from './template.js'

/**
 * @param chunks : amount to divide the img by; default 10
 * @param speed : amount of time in seconds to reveal the img; default is 10
 * @param color : color that you want to the chunks to be; default white
 */
export class SlowImage extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    const root = this

    // set the image
    let img = new Image()
    img.onload = () => {
      //declarations
      let chunks = parseInt(root.getAttribute('chunks')) || 10
      let speed = root.getAttribute('speed') || 10
      let imgHeight = root.shadowRoot.querySelector('img').height
      let imgWidth = root.shadowRoot.querySelector('img').width
      let chunkSize = imgHeight / chunks
      let milli = (speed / chunks) * 1000



      root.shadowRoot.querySelector('style').innerHTML += `
      [id^="cover"]{height:${chunkSize}px;width:${imgWidth}px;z-index:2;background-color:${root.getAttribute('color') || 'white'};}
      #mask{height:${imgHeight}px;width:${imgWidth}px;z-index:2;margin-left: -${imgWidth}px;}
      img{visibility:visible !important;}
      `
      root.shadowRoot.getElementById('container').innerHTML += '<div id="mask"></div>'

      for (let i = 1; i <= chunks; i++) {
        root.shadowRoot.getElementById('mask').innerHTML += `<div id="cover${i}"></div>`
      }

      var i = 1
      var intervalId = setInterval(function () {
        if (i === chunks) {
          clearInterval(intervalId)
          root.shadowRoot.getElementById('mask').remove()
        }
        root.shadowRoot.querySelector('style').innerHTML += `#cover${i}{visibility:hidden;}`
        i++
      }, milli)
    }

    img.src = this.getAttribute('src')
    this.shadowRoot.getElementById('container').appendChild(img)
    this.shadowRoot.querySelector('style').innerHTML += `
    img{z-index:1;visibility:hidden}
    #mask{display: inline-block;}
    `
  }
}
