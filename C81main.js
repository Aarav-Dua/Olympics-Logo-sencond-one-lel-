canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var coaloar="blue";

//<--NEW SECTION!!!-->
//beginPath(): Begins a path, or resets the current path for drawing anything. It tells the canvas to start drawing the shape/object.
ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidth= 4 ;
ctx.rect(185, 185, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 4 ;
ctx.arc(280, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 4 ;
ctx.arc(400, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 4 ;
ctx.arc(520, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 4 ;
ctx.arc(335, 300, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 4 ;
ctx.arc(465, 300, 40, 0, 2*Math.PI);
ctx.stroke();



