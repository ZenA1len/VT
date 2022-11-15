var hd = document.getElementsByTagName('ul');
var button = document.getElementById('btn');
var body = document.getElementsByTagName('body')
var foot = document.getElementsByTagName('footer')
var a = 0;


button.onclick = function(){
    if(a < 1000){
        if(a%2==0){
                hd[0].style.background = "gray";
                body[0].style.background = "lightgray";
                foot[0].style.background = "rgb(40,40,40)";
        }
        else{
                hd[0].style.background = "bisque";
                body[0].style.background = "white";
                foot[0].style.background = "blueviolet";
        }
        a+=1;
    }
}