const template = document.createElement('template')

template.innerHTML = `
<style>
#textDisplay {
    align: center;
}
#test {
  position:relative;
}
progress {
    -webkit-appearance: none;
    appearance: none;
}
</style>
<div>
<h4></h4>
<progress id="wo-progress"></progress>
<p id="textDisplay"></p>
</div>
`

export default template
