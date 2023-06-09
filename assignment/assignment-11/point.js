let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let country = document.getElementById('country')
let score = document.getElementById('score')
let message = document.querySelector('.message')
let ul = document.querySelector('.listParent')

let addPlayerBtn = document.querySelector('.addPlayer')

addPlayerBtn.addEventListener('click', addlist)


function updateVal(e){
    let updateScore = e.currentTarget.children[2];
    let del = e.target.classList
    
    if(del[1] === 'fa-trash'){
        console.log(e.currentTarget)
        e.currentTarget.remove();
    }else if(e.target.classList[0] === 'add'){
        updateScore.innerText = Number(updateScore.innerText) + 5;
    }else if(e.target.classList[0] === 'sub'){
        updateScore.innerText = Number(updateScore.innerText) - 5;
    }
}



function addlist(){
    let time = new Date();
    let currentTime = time.toString().slice(4,21)

    if(fname.value == "" || lname.value == "" || country.value == "" || score.value == "" ){
        message.style.display = 'block'
    }else{
        message.style.display = 'none'
        let newLi = document.createElement('li')
        newLi.innerHTML = `<div class="nameField" >${fname.value} ${lname.value}<h5 class="time">${currentTime}</h5></div>
        <div class="countryField" >${country.value}</div>
        <div class="scoreFiels" >${score.value}</div>
        <div class="duBtn" >
            <div class="del" ><i class="fa fa-trash"></i></div>
            <div class="add" >+5</div>
            <div class="sub" >-5</div>
        </div>`
        newLi.classList.add('player')
        ul.appendChild(newLi)
        
        newLi.addEventListener('click', updateVal)
    }

    
}