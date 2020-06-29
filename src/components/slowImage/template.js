const template = document.createElement('template')

template.innerHTML = `
<style>
img {
    z-index:1;
    visibility:hidden
}
#mask {
    display:inline-block;
    z-index:2;
}
[id^="cover"] {
    z-index:2;
}
</style>
<div>
<div id='container'>
</div>
</div>
`
export default template
