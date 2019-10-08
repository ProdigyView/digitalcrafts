
var boardElement = document.getElementById("board");
var boardData = [];
console.log(boardElement);
function makeBoard() {

    for(var row = 0; row<3; row++) {

        var rowElement = document.createElement("div");
        rowElement.className="row";
        boardData[row] = [];

        for(var column = 0; column<3; column++) {
            var columnElement = document.createElement("div");
            columnElement.className="col border board-piece";
            columnElement.innerHTML="Row " + row + " Column " + column;
    
            boardData[row][column] = columnElement;
            rowElement.appendChild(columnElement);
        }

        boardElement.appendChild(rowElement);
    }

    console.log(boardData);
    boardData[0][1].innerHTML="SUP";
}

makeBoard();
