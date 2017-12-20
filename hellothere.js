var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.addEventListener("mousedown", plopImg, false);

// Setting Up Audio
var sound = new Howl({
  urls: ['hellothere.mp3']
});

$( window ).resize(function() {
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;
  var bgObj = new Image();
  bgObj.onload = function(){
    context.drawImage( bgObj, 0, 0 ,context.canvas.width ,  context.canvas.height);
  };
  bgObj.src = 'droids.jpg';
});
	
$(document).ready(function(){
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;
  var bgObj = new Image();
  bgObj.onload = function(){
    context.drawImage( bgObj, 0, 0 , context.canvas.width ,  context.canvas.height);
  };
  bgObj.src = 'droids.jpg';
});

function plopImg(event)
{
  var x = event.clientX;
  var y = event.clientY;
  var imageObj = new Image();
  imageObj.onload = function() {
    context.drawImage(imageObj, x - 78, y - 104);
  };
  imageObj.src = 'hellothere.png';
  sound.play();
}
