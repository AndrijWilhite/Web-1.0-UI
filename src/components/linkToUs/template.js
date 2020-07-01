const template = document.createElement('template')

template.innerHTML = `
<style>
#container {
    display: flex;
    border-style: solid;
    border-width: 2px;
}
.innerBox {
    float: left;
    width: 50%;
}
#vr {
    width: 2px;
    background-color: black;
    height: 100%;
    float: left;
}
.innerBox{
    display: flex;
    align-items: center;
    overflow-wrap: anywhere;;
}
#left{
    justify-content: center;
}
</style>
<div id="container">
<div id="left" class="innerBox"></div>
<div id="vr"></div>
<div id="right" class="innerBox"></div>
</div>
`

export default template
