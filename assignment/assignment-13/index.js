var timer;
var ele = document.getElementById("countdown");



( function(){
    var sec = 10;
    timer = setInterval(()=>{
        ele.innerHTML = `10:`+ sec;
        sec--;
    },500)
})



  
let image = document.getElementById("image");
let images =['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMke-ebpmIGsQZd0LNvNwP5L3RqdMpCzChG6dkmHHSQ&s','https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/5989242/pexels-photo-5989242.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load','https://images.pexels.com/photos/1212045/pexels-photo-1212045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/7451795/pexels-photo-7451795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load']

setInterval(function(){
    let random = Math.floor(Math.random() * 4)
    image.src =images[random];
}, 1600);



