const template = document.createElement('template')

template.innerHTML = `
<style>
#content {
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: yellow;
    font-family:"American Typewriter";
    font-weight: bold;
    font-size: 12px;
    margin: 0px;
}
#container {
    display:inline-block;
    border-radius: 2px;
}
#container {
    animation: glow .5s infinite alternate;
}
@keyframes glow {
    to {
        text-shadow: 0 0 10px yellow;
    }
}
</style>
<div id="container">
    <p id="content"></p>
</div>
`

export default template
