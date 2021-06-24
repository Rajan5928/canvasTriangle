const canvas = document.querySelector('canvas');
const reset = document.querySelector('button');


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const ctx = canvas.getContext('2d');


var x,y,p,q;
function makeRect(event){
   p = event.clientX;
   q = event.clientY;
  console.log(p,q);
 
  X()
}
canvas.addEventListener('mousedown',(event)=>{
  x = event.clientX;
  y = event.clientY;
  canvas.addEventListener('mouseup',makeRect);
  
  console.log(x,y)
})
 function X(){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(p, q);
    ctx.lineTo(x-(p-x), q);
    ctx.closePath();
    
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = '#666666';
    // ctx.stroke();
    
    var a='#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
    ctx.fillStyle=a
    ctx.fill();
 }
reset.addEventListener('click',()=>{
ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
})