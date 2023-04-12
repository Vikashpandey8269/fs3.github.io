document.getElementById("demo").innerHTML = 
"<b>Screen width :</b> " + screen.width;

document.getElementById("demo1").innerHTML = 
"<b>Screen height :</b>  " + screen.height;

let depth = screen.colorDepth;
document.getElementById("demo3").innerHTML =  " <b>depth of the screen : </b> "+depth;