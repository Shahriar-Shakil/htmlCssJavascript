var imageDate = ['images/st1.jpg','images/st2.jpg','images/st3.jpg','images/st4.jpg'];
var index = 0;
function changeImage() {
    var sliderImg = document.getElementById('slider-img');
    sliderImg.setAttribute('src',imageDate[index]);
    index++;
    if(index ==imageDate.length){
        index=0;
    }
}
setInterval(changeImage,1000);

function myWatch(){
    var heading = document.getElementById('heading');
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var sec = today.getSeconds();
    var time=heading.innerHTML=hours+':'+minutes+':'+sec;
}

setInterval(myWatch,1000);








/*function test(){
    alert('hello world!');
}
//setInterval(test,1000);
setTimeout(test , 1000);*/






var btn = document.getElementById("btn");
btn.onclick = function () {
    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
    var bgColor = document.getElementById('bgColor').value;

    var newDiv = document.getElementById('res');
    newDiv.style.height = height + 'px';
    newDiv.style.width = width + 'px';
    newDiv.style.backgroundColor = bgColor;
}