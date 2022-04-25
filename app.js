// sets up 16 x 16 board
function setupGameBoard(n = 16) {
    let gameBoard = document.querySelector(".gameBoard");

    for (let i = 0; i < n; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("gameRow");
        for (let j = 0; j < n; j++) {
            const newCell = document.createElement("div");
            newCell.classList.add("gameCell");
            newRow.appendChild(newCell);
        }
        gameBoard.appendChild(newRow);
    }
    setColorStyleFunction();
}

function clearGameBoard() {
    let gameBoard = document.querySelector(".gameBoard");
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }
}

function randomColorHover() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = `#${randomColor}`;
}

// resets board to have original background color
function resetGameBoard() {
    let gameCells = document.querySelectorAll(".gameCell");
    gameCells.forEach(cell => cell.style.backgroundColor = "#b3aeae");
}

// when cell is hovered, background color changes
function normalColorHover() {
    this.style.backgroundColor = "aquamarine";
}

function setColorStyleFunction(){
    let gameCells = document.querySelectorAll(".gameCell");
    let colorStyle = document.querySelector('input[name="colorStyle"]:checked').value;
    switch (colorStyle) {
        case "normal":
            gameCells.forEach(cell => cell.removeEventListener('mousemove', randomColorHover));
                gameCells.forEach(cell => cell.addEventListener('mousemove', normalColorHover));
                break;
            case "random":
                gameCells.forEach(cell => cell.removeEventListener('mousemove', normalColorHover));
                gameCells.forEach(cell => cell.addEventListener('mousemove', randomColorHover));
                break;
    }
}

setupGameBoard();

let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener('click', resetGameBoard);

// Updates grid layout based on range slider
let boardSizeSlider = document.getElementById("boardSize");
let boardSizeOutput = document.getElementById("boardSizeValue");
boardSizeSlider.oninput = function () {
    boardSizeOutput.textContent = `${this.value} X ${this.value}`;
    clearGameBoard();
    setupGameBoard(this.value);
}

let colorStyleButtons = document.querySelectorAll('input[name="colorStyle"]');
colorStyleButtons.forEach(btn => btn.addEventListener('change', setColorStyleFunction));
