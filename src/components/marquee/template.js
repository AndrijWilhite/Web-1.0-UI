const template = document.createElement('template')

template.innerHTML = `
<style>
.marq { 
  white-space: nowrap; 
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.marq:hover {
  animation-play-state: paused;
}
@-webkit-keyframes marquee {
  0% {text-indent: 100%;}
  100% {text-indent: -100%;}
}
</style>
<div class="marq"></div>
`

export default template
