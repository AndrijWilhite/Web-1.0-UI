const template = document.createElement('template')

const icons = []
icons[0] = new Image()
icons[0].src = 'src/components/siteExplorer/icons/plus.gif'
icons[1] = new Image()
icons[1].src = 'src/components/siteExplorer/icons/plusbottom.gif'
icons[2] = new Image()
icons[2].src = 'src/components/siteExplorer/icons/minus.gif'
icons[3] = new Image()
icons[3].src = 'src/components/siteExplorer/icons/minusbottom.gif'
icons[4] = new Image()
icons[4].src = 'src/components/siteExplorer/icons/folder.gif'
icons[5] = new Image()
icons[5].src = 'src/components/siteExplorer/icons/folderopen.gif'
icons[6] = new Image()
icons[6].src = 'src/components/siteExplorer/icons/page.gif'

template.innerHTML = `
<style>
.hidden{
    display: none !important;
}
button {
    background: url('${icons[4].src}');
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width:20px;
    height:20px;
}
button:focus {
    outline: none;
    box-shadow: none;
}
#wrapper{
    display:flex;
    flex-direction: column;
    width: 50px;
    float:left;
}
.file{
    background: url('${icons[6].src}');
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width:20px;
    height:20px; 
}

</style>
<div id='container'>
</div>
`
export default template
