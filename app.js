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

setupGameBoard();