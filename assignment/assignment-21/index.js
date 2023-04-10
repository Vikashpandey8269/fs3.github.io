let x = Math.floor(Math.random()*(10 - 1))+1;

function delay (millis){
    return new Promise((resolve,reject) =>{
        setTimeout(resolve,millis);
    });
}

delay(1000).then(() => console .log(x))