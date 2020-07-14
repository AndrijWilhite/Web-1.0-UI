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
icons[7] = new Image()
icons[7].src = 'src/components/siteExplorer/icons/joinbottom.gif'
icons[8] = new Image()
icons[8].src = 'src/components/siteExplorer/icons/base.gif'

template.innerHTML = `
<style>
.hidden{
    display: none !important;
}
button {
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    width:15px;
    height:15px;
}
button:focus {
    outline: none;
    box-shadow: none;
}
#wrapper{
    display:flex;
    width: 100px;
}
.file{
    background: url('${icons[6].src}');
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    width:20px;
    height:15px; 
}

#closedFolder {
    content: url('${icons[4].src}');
}

#openFolder {
    content:  url('${icons[5].src}');
}

#line {
    content: url('${icons[7].src}')
}

.plusIcon {
    background: url('${icons[0].src}');
}
.minusIcon {
    background: url('${icons[2].src}');
}
.plusBottom {
    background: url('${icons[1].src}');
}
.minusBottom {
    background: url('${icons[3].src}');
}
</style>
<div id='container'>
<img src="src/components/siteExplorer/icons/base.gif" align="absbottom"></img>
</div>
`
export default template
