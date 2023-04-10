function getRandom(min,max){
    let x = Math.floor(Math.random()*(max- min))+min;

    return x;


}

function delay (millis){
    return new Promise((resolve,reject) =>{
        setTimeout(resolve,millis);
    });
}

delay(1000).then(() => console .log(getRandom(1,10)));