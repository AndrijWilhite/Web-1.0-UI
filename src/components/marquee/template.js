const template = document.createElement('template')

template.innerHTML = `
<style>
marquee { background: #0089fa; }

.right { background: #ff002b;
  white-space: nowrap; 
  overflow: hidden;
  animation: marquee 10s linear infinite;
}
.right:hover {
  animation-play-state: paused;
}
@-webkit-keyframes marquee {
  0% {text-indent: 100%;}
  100% {text-indent: -100%;}
}






</style>
<div class="right"></div>
`

export default template

/**
 * .li {
  float: left;
  width: 80%;
  padding: 1%;
  margin: 1% 10%;
  height: 20px;
  border-radius: 0.5em;
  box-shadow: 0 0.1em 0.5em;
}
.rightJS { background: #ffa900; }

.rightJQ { background: #00a753; }
.rightCSS { 
  background: #a35dc1;
  overflow: hidden;
} 
.rightCSS div {
  position: relative;
  animation: CSSright linear 10s infinite;
} 
@keyframes CSSright {
  0% { right: -100% }
  100% { right: 100% }
}
.rightCSS:hover div {
  animation-play-state: paused;
}
 */