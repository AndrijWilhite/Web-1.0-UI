const template = document.createElement('template')

template.innerHTML = `
<style>
.box {
    background-color: gray;
    width: auto;
    height: 50px;
    border: 1px solid gray;
    overflow-y:auto;
}
::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  }
</style>
<div class="box"></div>
`

export default template
