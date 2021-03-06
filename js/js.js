let color = "black"


function populateBoard(size) {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
    board.style.gridTemplateRows = `repeat(${size} ,1fr)`;

    let amount = size * size;
for(let i = 0; i < amount ; i++){
    let square = document.createElement("div");
    square.style.backgroundColor = "lightgrey";
    board.insertAdjacentElement("beforeend",square);

    square.addEventListener("mouseover", colorSquare)
    }
}

populateBoard(16);

function changeSize(input) {
    if(input >= 2 || input <= 100) {
    populateBoard(input);
    }
    else{console.log("Not within the margins")}
}

function colorSquare() {
        this.style.backgroundColor =  color;
    }

function changeColor(input) {
    color = input;
}

function reset() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "lightgray"));
}
