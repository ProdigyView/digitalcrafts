/**
 * TicTacToe
 * 
 * The following is an application for creating a TicTacToe
 * game in javacscript.
 * 
 * - Functions -
 * Please review the following functions that are used throughout
 * this solution.
 * 
 * document - https://www.w3schools.com/js/js_htmldom_document.asp
 * getElementById - https://www.w3schools.com/jsref/met_document_getelementbyid.asp
 * createElement - https://www.w3schools.com/jsref/met_document_createelement.asp
 * appendChild - https://www.w3schools.com/jsref/met_node_appendchild.asp
 * innerHtml - https://www.w3schools.com/jsref/prop_html_innerhtml.asp
 * split - https://www.w3schools.com/jsref/jsref_split.asp
 * alert - https://www.w3schools.com/jsref/met_win_alert.asp
 * onlclick - https://www.w3schools.com/jsref/event_onclick.asp
 * 
 * - Grid System -
 * The grid system is a multi-dimensional array. Please read here on
 * multidimensional arrays: 
 * https://www.javascripttutorial.net/javascript-multidimensional-array/
 * 
 * In our use case, the board is a multi-dimensional array as such:
 * 
 * ******************
 *  0,0 | 0,1 | 0,2 *
 * ******************
 *  1,0 | 1,1 | 1,2 *
 * ******************
 *  2,0 | 2,1 | 2,2 *
 * ******************
 * 
 * Think of the numbers in the grid as coordinates. Calling 1,1
 * with boardData[1][1] will give you access to the block at the
 * center of the grid. Each space on the board can be accessed
 * with the corresponding coordinate.
 * 
 */


//Retrieve the board div
var boardElement = document.getElementById("board");

//Set the board represential data
//This will be the multidimensional grid
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
                //Split the id into an array of coordinations
                var idArray = idString.split("-");

                //Execute a click action
                if(this.innerHTML == getXPiece() || this.innerHTML == getOPiece()){
                    alert("You cannot change this piece");
                } else if(currentPlayer == "player1") {
                    /**
                     * If the player is player 1, get the X piece
                     * and then switch to player 2
                     */
                    this.innerHTML = getXPiece();
                    currentPlayer = "player2";

                    //After the move, check if any of the winning
                    //conditions have been met
                    checkWinVertical(idArray[0], idArray[1], getXPiece());
                    checkWinHorizantal(idArray[0], idArray[1], getXPiece());
                    checkWinDiagonal(idArray[0], idArray[1], getXPiece());
                } else if(currentPlayer == "player2"){
                    /**
                     * If the player is player 2, get the O piece
                     * and then switch to player 1
                     */
                    this.innerHTML = getOPiece();
                    currentPlayer = "player1";

                    //After the move, check if any of the winning
                    //conditions have been met
                    checkWinVertical(idArray[0], idArray[1], getOPiece());
                    checkWinHorizantal(idArray[0], idArray[1], getOPiece());
                    checkWinDiagonal(idArray[0], idArray[1], getOPiece());
                }
                
            } 

            //Add the columnElement to the multidimensional array
            boardData[row][column] = columnElement;

            //Add the html of the element to the row
            rowElement.appendChild(columnElement);

        }

        //Add the html to the board, this will
        //update the html on the website
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

//Call the function that makes the grid
makeBoard();
