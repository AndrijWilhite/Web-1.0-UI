const template = document.createElement('template')

template.innerHTML = `
<style>
#box {
    background-color: #C0C0C0;
    border: 1px solid black;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    display: inline-block;
    margin-right: -4px;
    overflow: hidden;
}
.container {
    display: flex;
    align-items: stretch;
}
</style>
<div id="container">
<div id="box"></div>
</div>
`

export default template
