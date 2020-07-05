const template = document.createElement('template')

let downArrow = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQwNC4zMDggNDA0LjMwOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDA0LjMwOCA0MDQuMzA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTAsMTAxLjA4aDQwNC4zMDhMMjAyLjE1MSwzMDMuMjI5TDAsMTAxLjA4eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo='
let upArrow = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTI4MC4wMDAwMDBwdCIgaGVpZ2h0PSIxMjgwLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTI4MC4wMDAwMDAgMTI4MC4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPG1ldGFkYXRhPgpDcmVhdGVkIGJ5IHBvdHJhY2UgMS4xNiwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTkKPC9tZXRhZGF0YT4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTI4MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0zMTk1IDY0MDAgbC0zMjAwIC0zMjAwIDY0MDUgMCA2NDA1IDAgLTMyMDAgMzIwMCBjLTE3NjAgMTc2MCAtMzIwMgozMjAwIC0zMjA1IDMyMDAgLTMgMCAtMTQ0NSAtMTQ0MCAtMzIwNSAtMzIwMHoiLz4KPC9nPgo8L3N2Zz4K'

template.innerHTML = `
<style>
button {
    padding: 0px;
    background: #BDBDBD;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 75%;
    border-width:2px;
    box-sizing: border-box;
    border-bottom-color: #F2F2F2;
    border-right-color: #F2F2F2;
    border-top-color: #EEEEEE;
    border-left-color: #EEEEEE;
}
#up-btn{
    background-image: url(${upArrow});
}
#down-btn{
    background-image: url(${downArrow});
}
button:focus {
    outline: none;
    box-shadow: none;
}
#slider {
    background: #BDBDBD;
    position: absolute;
    box-sizing: border-box;
    border-width: 2px;
    border-style: outset;
}
#content {
    overflow: hidden;
}
#container {
    display: flex;
    flex-direction: row;
    background-color: #FFF;
    border: 1px solid black;
    justify-content: space-between;
}
#scrollBar {
    position: relative;
    margin-top: -1px;
}
#track {
    margin-top: -2px;
    margin-bottom: -1px;
    background-size: 1px 1px;
    background-position: 0 0, 1px 1px;
    background-image: linear-gradient(45deg, #F2F2F2 50%, #C8C8C8 50%, #C8C8C8 75%, #F2F2F2 75%, #F2F2F2),
    linear-gradient(45deg, #F2F2F2 50%, #C8C8C8 50%, #C8C8C8 75%, #F2F2F2 75%, #F2F2F2);
}

</style>
<div id="container">
    <div id="content"></div>
    <div id="scrollBar">
    <button id='up-btn' class='scale'></button>
    <div id='track' class='scale'>
        <div id='slider'></div>
     </div>
    <button id='down-btn' class='scale'></button>
</div>
</div>
`
export default template
