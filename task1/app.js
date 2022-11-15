var hd = document.getElementsByTagName('ul');
var button = document.getElementById('btn');
var body = document.getElementsByTagName('body')
var foot = document.getElementsByTagName('footer')
var a = 0;


button.onclick = function () {
    if (a == 0) {
        hd[0].style.background = "gray";
        body[0].style.background = "lightgray";
        foot[0].style.background = "rgb(40,40,40)";
        a = 1;
    }
    else if (a == 1) {
        hd[0].style.background = "bisque";
        body[0].style.background = "white";
        foot[0].style.background = "blueviolet";
        a = 0;
    }
}