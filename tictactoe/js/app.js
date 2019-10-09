
//Retrieve the board div
var boardElement = document.getElementById("board");

//Set the board represential data
var boardData = [];

//Set the current Player
var currentPlayer = "player1";

//Creates The Board
var makeBoard = function() {
    
    //The Row
    for(var row =0; row<3; row++) {

        //Create row html element
        var rowElement = document.createElement("div");
        rowElement.className="row"

        boardData[row] = [];

        //Create The Columns that will go into the rows
        for(var column=0; column<3; column++) {

            //Create a column element
            var columnElement = document.createElement("div");
            //Assign a class to the column element
            columnElement.className ="col border board-piece";
            //Set Default text to the columnelment
            columnElement.innerHTML = "Row " + row + " Column " + column;
            //Set an id of the coordinates as the current row and column
            columnElement.id= row + "-" + column;

            //Set the onclick for when a user clicks the column
            columnElement.onclick = function() {
                
                //Get the id assigned to the column
                var idString = this.id;
                //Split the id into an array, the index 0
                //will be the row, and the index 1
                //will be the column
                var idArray = idString.split("-");

                //Execute a click action
                if(this.innerHTML == getXPiece() || this.innerHTML == getOPiece()){
                    alert("You cannot change this piece");
                } else if(currentPlayer == "player1") {
                    this.innerHTML = getXPiece();
                    currentPlayer = "player2";
                    checkWinVertical(idArray[0], idArray[1], getXPiece());
                    checkWinHorizantal(idArray[0], idArray[1], getXPiece());
                    checkWinDiagonal(idArray[0], idArray[1], getXPiece());
                } else if(currentPlayer == "player2"){
                    this.innerHTML = getOPiece();
                    currentPlayer = "player1";
                    checkWinVertical(idArray[0], idArray[1], getOPiece());
                    checkWinHorizantal(idArray[0], idArray[1], getOPiece());
                    checkWinDiagonal(idArray[0], idArray[1], getOPiece());
                }
                
            } 

            boardData[row][column] = columnElement;

            rowElement.appendChild(columnElement);

        }

        boardElement.appendChild(rowElement);

    }
}

//Get the represenation of the X piece
var getXPiece = function() {
    return "X";
}

//Get the representation of the O piece
var getOPiece = function() {
    return "O";
}

//Check to see if a user has won vertically
var checkWinVertical = function(row, column, piece) {
    var points = 0;

    if(boardData[row-2] && boardData[row-1][column] && boardData[row-2][column].innerHTML == piece) {
        points++;
    }

    if(boardData[row-1] && boardData[row-1][column] && boardData[row-1][column].innerHTML == piece) {
        points++;
    }

    if(boardData[row+1] && boardData[row+1][column] && boardData[row+1][column].innerHTML == piece) {
        points++;
    }

    if(boardData[row+2] && boardData[row+1][column] && boardData[row+2][column].innerHTML == piece) {
        points++;
    }

    if(points >= 2) {
        alert("You have won");
    }

}

//Check to see if a user has won horizantally
var checkWinHorizantal = function(row, column, piece) {
    var points = 0;

    if(boardData[row] && boardData[row][column-2] && boardData[row][column-2].innerHTML == piece) {
        points++;
    }

    if(boardData[row] && boardData[row][column-1] && boardData[row][column-1].innerHTML == piece) {
        points++;
    }

    if(boardData[row] && boardData[row][column+1] && boardData[row][column+1].innerHTML == piece) {
        points++;
    }

    if(boardData[row] && boardData[row][column+2] && boardData[row][column+2].innerHTML == piece) {
        points++;
    }

    if(points >= 2) {
        alert("You have won");
    }

}

//Check to see if a user has one on a diagonal
var checkWinDiagonal = function(row, column, piece) {
    var points = 0;

    if(boardData[row-2] && boardData[row-2][column-2] && boardData[row-2][column-2].innerHTML == piece) {
        points++;
    }

    if(boardData[row-1] && boardData[row-1][column-1] && boardData[row-1][column-1].innerHTML == piece) {
        points++;
    }

    if(boardData[row+1] && boardData[row+1][column+1] && boardData[row+1][column+1].innerHTML == piece) {
        points++;
    }

    if(boardData[row+2] && boardData[row+2][column+2] && boardData[row+2][column+2].innerHTML == piece) {
        points++;
    }

    if(points >= 2) {
        alert("You have won");
    }

}


makeBoard();
