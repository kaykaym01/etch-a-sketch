// sets up the game board with n rows and n columns
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

// removes all cells from the game board
function clearGameBoard() {
    let gameBoard = document.querySelector(".gameBoard");
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }
}

// when cell is hovered, background color changes to random color
function randomColorHover() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = `#${randomColor}`;
}

// resets board to have original background color
function resetGameBoard() {
    let gameCells = document.querySelectorAll(".gameCell");
    gameCells.forEach(cell => cell.style.backgroundColor = "#b3aeae");
}

// when cell is hovered, background color changes to user selected color
function normalColorHover() {
    this.style.backgroundColor = hoveredCellColor;
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

// updates cell 
function updateHoveredCellColor(){
    hoveredCellColor = this.value;
}

setupGameBoard();

// reset button clears all color changes from board
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

// color style normal vs random determines how background of
// cells change
let colorStyleButtons = document.querySelectorAll('input[name="colorStyle"]');
colorStyleButtons.forEach(btn => btn.addEventListener('change', setColorStyleFunction));

// user can use color picker to change cell background color
let hoveredCellColor = "#7FFFD4";
let cellColor = document.querySelector("input[name=cellChangeColor]");
cellColor.addEventListener("input", updateHoveredCellColor);