const template = document.createElement('template')

template.innerHTML = `
<style>
.hidden{
    display: none !important;
}
button {
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    width:20px;
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
    background: url('src/components/siteExplorer/icons/page.gif');
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    width:20px;
    height:15px;
}
#closedFolder {
    content: url('src/components/siteExplorer/icons/folder.gif');
}
#openFolder {
    content:  url('src/components/siteExplorer/icons/folderopen.gif');
}

#line {
    content: url('src/components/siteExplorer/icons/joinbottom.gif')
}
#lineBottom {
    content: url('src/components/siteExplorer/icons/join.gif');
}

.plusIcon {
    background: url('src/components/siteExplorer/icons/plus.gif');
}
.plusBottom {
    background: url('src/components/siteExplorer/icons/plusbottom.gif');
}

.minusIcon {
    background: url('src/components/siteExplorer/icons/minus.gif');
}
.minusBottom {
    background: url('src/components/siteExplorer/icons/minusbottom.gif');
}

a{
    overflow: hidden;
    white-space: nowrap;
    color: black;
    text-decoration: none;
}
#container{
    font-size: 14px;
}
#fillerTop{
    background:url('src/components/siteExplorer/icons/line.gif');
    z-index: 3;
}
</style>
<div id='container'>
<img src="src/components/siteExplorer/icons/base.gif" align="absbottom"></img>
</div>
`
export default template
