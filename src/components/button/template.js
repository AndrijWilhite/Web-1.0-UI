const template = document.createElement('template')

template.innerHTML = `
<style>
button[size="s"] {
    width: 50px;
    height: 18px;
}
button[size="m"] {
    width: 75px;
    height: 24px;
}
button[size="lrg"] {
    width: 100px;
    height: 36px;
}
button[size="xl"] {
    width: 150px;
    height: 54px;
}
button {
    margin: 2px;
    height: 18px;
    padding: 2px 8px;
    border: 1px solid #F3F3F3;
    -moz-box-shadow: 0 0 0 1px #707070;
    -webkit-box-shadow: 0 0 0 1px #707070;
    box-shadow: 0 0 0 1px #707070;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background: -moz-linear-gradient(top, #F2F2F2 0%, #EBEBEB 50%, #DDDDDD 51%, #CFCFCF 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0,#F2F2F2), color-stop(0.5,#EBEBEB),color-stop(0.51,#DDDDDD),color-stop(1,#CFCFCF));
    background: linear-gradient(top, #F2F2F2 0%, #EBEBEB 50%, #DDDDDD 51%, #CFCFCF 100%);
    font: normal 12px sans-serif;
    color: black;
    text-decoration: none;
}
button:active {
    padding: 2px 7px 3px 9px;
    border: 1px solid #73A7C4;
    border-bottom: 0;
    -moz-box-shadow: 0 0 0 1px #2C628B;
    -webkit-box-shadow: 0 0 0 1px #2C628B;
    box-shadow: 0 0 0 1px #2C628B;
    background: -moz-linear-gradient(top, #E5F4FC 0%, #C4E5F6 50%, #98D1EF 51%, #68B3DB 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0,#E5F4FC), color-stop(0.5,#C4E5F6),color-stop(0.51,#98D1EF),color-stop(1,#68B3DB));
}
button:hover {
    border: 1px solid #ECF7FD;
    -moz-box-shadow: 0 0 0 1px #3C7FB1;
    -webkit-box-shadow: 0 0 0 1px #3C7FB1;
    box-shadow: 0 0 0 1px #3C7FB1;
    background: -moz-linear-gradient(top, #EAF6FD 0%, #D9F0FC 50%, #BEE6FD 51%, #A7D9F5 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0,#EAF6FD), color-stop(0.5,#D9F0FC),color-stop(0.51,#BEE6FD),color-stop(1,#A7D9F5));
    background: linear-gradient(top, #EAF6FD 0%, #D9F0FC 50%, #BEE6FD 51%, #A7D9F5 100%);
}
</style>
<button id="wo-button"></button>
`

export default template
