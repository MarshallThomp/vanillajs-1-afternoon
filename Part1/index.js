// console.log('Yo!')

let board = [];
let resetButton = document.getElementById("reset");
let gameWon = false;
console.log(resetButton) 

function play(clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId)

    if(!gameWon) {
    if(playerSpan.innerText === "X") {
        playerSpan.innerText = "O"
        clickedElement.innerText = "X"
        board[clickedId] = "X"
        // console.log(playerSpan, clickedElement)
    }else {
        playerSpan.innerText = "X"
        clickedElement.innerText = "O"
        board[clickedId] = "O"
            // console.log(playerSpan, clickedElement)
    }
}
    console.log(board)

var topLeft = board[0]
var topMid = board[1]
var topRight = board[2]
var middleLeft = board[3]
var middleMid = board[4]
var middleRight = board[5]
var bottomLeft = board[6]
var bottomMid = board[7]
var bottomRight = board[8]

if(topLeft !== undefined && topLeft === topMid && topLeft === topRight){
    gameWon = true
    alert(`${topLeft} is the winner`);
    return resetButton.style.display = "block";
}
if(middleLeft !== undefined && middleLeft === middleMid && middleLeft === middleRight) {
    gameWon = true    
    alert(`${middleLeft} is the winner`);
    return resetButton.style.display = "block";
}
if(bottomLeft !== undefined && bottomLeft === bottomMid && bottomLeft === bottomRight){
    gameWon = true    
    alert(`${bottomLeft} is the winner`);
    return resetButton.style.display = "block";
}
if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    gameWon = true   
    alert(`${topLeft} is the winner`);
    return resetButton.style.display = "block";
}
if(topMid !== undefined && topMid === middleMid && topMid === bottomMid) {
    gameWon = true   
    alert(`${topMid} is the winner`);
    return resetButton.style.display = "block";
}
if(topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    gameWon = true   
    alert(`${topRight} is the winner`);
    return resetButton.style.display = "block";
}
if(bottomLeft !== undefined && bottomLeft === middleMid && bottomLeft === topRight) {
    gameWon = true    
    alert(`${bottomLeft} is the winner`);
    return resetButton.style.display = "block";
}
if(bottomRight !== undefined && bottomRight === middleMid && bottomRight === topLeft) {
    gameWon = true    
    alert(`${bottomRight} is the winner`);
    return resetButton.style.display = "block";
} 

let boardFull = true;
for(i = 0; i<=8; i++) {
    if(board[i] === undefined) {
        return false
    } 
    }
    if(boardFull === true) {
        alert("Cat's game, there is no winner");
        resetButton.style.display = "block";
    }
}

function reset() {
    location.reload()
}
