
let chess = document.getElementById('chess')

for(i = 1; i < 9; i++){
    let box1 = document.createElement('div')
    if(i % 2 == 0){
        box1.style.background = 'black'
    }
    else{
        box1.style.background = 'white'
    }
    chess.appendChild(box1)
}

