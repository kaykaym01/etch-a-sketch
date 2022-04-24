// sets up 16 x 16 board
function setupGameBoard(n = 16){
    let gameBoard = document.querySelector(".gameBoard");

    for (let i = 0; i < n; i++){
        const newRow = document.createElement("div");
        newRow.classList.add("gameRow");
        for (let j = 0; j < n; j++){
            const newCell = document.createElement("div");
            newCell.classList.add("gameCell");
            newCell.addEventListener('mousemove', cellHovered)
            newRow.appendChild(newCell);
        }
        gameBoard.appendChild(newRow);
    }
}

function clearGameBoard(){
    let gameBoard = document.querySelector(".gameBoard");
    while (gameBoard.firstChild){
        gameBoard.removeChild(gameBoard.firstChild);
    }
}

// resets board to have original background color
function resetGameBoard(){
    let gameCells = document.querySelectorAll(".gameCell");
    gameCells.forEach(cell => cell.classList.remove("gameCell_hovered"));
}

// when cell is hovered, background color changes
function cellHovered(e){
    this.classList.add("gameCell_hovered");
}

setupGameBoard();

let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener('click', resetGameBoard);

// Updates grid layout based on range slider
let boardSizeSlider = document.getElementById("boardSize");
let boardSizeOutput = document.getElementById("boardSizeValue");
boardSizeSlider.oninput = function(){
    boardSizeOutput.textContent = `${this.value} X ${this.value}`;
    clearGameBoard();
    setupGameBoard(this.value);
}
