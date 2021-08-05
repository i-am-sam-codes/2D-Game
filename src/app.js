/*const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0



function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    } )


    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

}

function moveMole() {
    let timerId = null 
    timerId = setInterval(randomSquare, 500)
}

randomSquare()*/

const container = document.querySelector('.gridContainer');
const eachSquare = document.querySelectorAll('div')
const btn = document.createElement("button");

//Button to change the sie of grid
btn.innerHTML = "Change";
btn.type = "submit";
btn.onclick = function () {
    
}

makeGrid(16);
function makeGrid(gridNum) {
    let square = gridNum * gridNum;
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`
    for(let i = 0; i <= square; i++){
        const cell = document.createElement('div');
        cell.id = 
        cell.style.border = '1px solid rgb(199, 196, 199)'
        container.append(cell)
        

        
    }
    const pixels = container.querySelectorAll('div');
    pixels.forEach(pixels => pixels.addEventListener('mouseover', mouseOver));
    
}


function mouseOver(){
    document.querySelector('div').style.backgroundColor = "purple";
}

//Random color function looping through a series of numbers and letters to create a random #hex code
function randomColor() {
    const letters = '0123456789ABCDEF';
    const color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementsByClass
} 