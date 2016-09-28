console.log('Loaded!');
//for changing the text
var element =document.getElementById('main-text');
element.innerHTML='Kishan tiwari';
//Move the picture in app
var img = document.getElementById('madi');
img.onclick=function(){
    img.style.marginLeft='100px';
};