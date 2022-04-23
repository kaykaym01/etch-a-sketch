// sets up 16 x 16 board
function setupGameBoard(){
    let numRows = 16;
    let numCols = 16;
    let gameBoard = document.querySelector(".gameBoard");

    for (let i = 0; i < numRows; i++){
        const newRow = document.createElement("div");
        newRow.classList.add("gameRow");
        for (let j = 0; j < numCols; j++){
            const newCell = document.createElement("div");
            newCell.classList.add("gameCell");
            newRow.appendChild(newCell);
        }
        gameBoard.appendChild(newRow);
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

let gameCells = document.querySelectorAll(".gameCell");
gameCells.forEach(cell => cell.addEventListener('mousemove', cellHovered));

let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener('click', resetGameBoard);