console.log('Loaded!');
//for changing the text
var element =document.getElementById('main-text');
element.innerHTML='Kishan tiwari';
//Move the picture in app
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px'
}
img.onclick=function(){
    var interval = setInterval(moveRight, 100);
   // img.style.marginLeft='100px';
};