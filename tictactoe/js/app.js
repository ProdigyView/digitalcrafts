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


 var TicTacToe = {
    boardElement : null,
    currentPlayerElement : null,
    scoreBoardElement : null,
    boardData : [],
    currentPlayer : "player1",
    player1Score: 0,
    player2Score : 0,
    setupElements : function(boardId, currentPlayerID, scoreBoardID) {
        this.boardElement = document.getElementById(boardId);
        this.currentPlayerElement = document.getElementById(currentPlayerID);
        this.scoreBoardElement = document.getElementById(scoreBoardID);
    },
    makeBoard : function() {
 
        //The Row
        for(var row =0; row<3; row++) {

            rowElement = this.createBoardRow();
            
            this.boardData[row] = [];

            //Create The Columns that will go into the rows
            for(var column=0; column<3; column++) {

                columnElement = this.createBoardColumn(row, column);

                //Add the columnElement to the multidimensional array
                this.boardData[row][column] = columnElement;

                //Add the html of the element to the row
                rowElement.appendChild(columnElement);

            }

            this.boardElement.appendChild(rowElement);

        }
    },
    createBoardRow : function() {
        //Create row html element
        var rowElement = document.createElement("div");
        rowElement.className="row"

        return rowElement;
    },
    createBoardColumn : function(row, column) {

        //Create a column element
        var columnElement = document.createElement("div");
        //Assign a class to the column element
        columnElement.className ="col border board-piece justify-content-center align-items-center text-center";
        //Set Default text to the columnelment
        columnElement.innerHTML = "Row " + row + " Column " + column;
        //Set an id of the coordinates as the current row and column
        columnElement.id= row + "-" + column;
        //Set the sytle via js
        columnElement.style="padding-top:5%"

        var parentObject = this;

        //Set the onclick for when a user clicks the column
        columnElement.onclick = function() {
            
            //Get the id assigned to the column
            var idString = this.id;
            //Split the id into an array of coordinations
            var idArray = idString.split("-");

            //Execute a click action
            if(this.innerHTML == parentObject.getXPiece() || this.innerHTML == parentObject.getOPiece()){
                alert("You cannot change this piece");
            } else if(parentObject.currentPlayer == "player1") {
                /**
                 * If the player is player 1, get the X piece
                 * and then switch to player 2
                 */
                this.innerHTML = parentObject.getXPiece();
                parentObject.currentPlayer = "player2";

                parentObject.setScoreBoard();
                parentObject.setPlayerTurn();
                parentObject.checkWin(idArray[0], idArray[1], parentObject.getOPiece());
            } else if(parentObject.currentPlayer == "player2"){
                /**
                 * If the player is player 2, get the O piece
                 * and then switch to player 1
                 */
                this.innerHTML = parentObject.getOPiece();
                parentObject.currentPlayer = "player1";

                parentObject.setScoreBoard();
                parentObject.setPlayerTurn();
                parentObject.checkWin(idArray[0], idArray[1], parentObject.getOPiece());
            }
            
        }
        
        return columnElement;

    },
    getXPiece : function() {
        return '<i class="fas fa-times fa-10x"></i>';
    },
    getOPiece : function() {
        return '<i class="far fa-circle fa-10x"></i>';
    },
    checkWin : function(row, column, piece) {

        var hasWon = false;

        if(this.checkWinDiagonal(row, column, piece)) {
            hasWon = true;
        } else if(this.checkWinHorizantal(row, column, piece)) {
            hasWon = true;
        } else if(this.checkWinVertical(row, column, piece)) {
            hasWon = true;
        }

        if(hasWon) {
            this.executeWin();
        }
    },
    checkWinVertical : function(row, column, piece) {
        var points = 0;
    
        if(this.boardData[row-2] && this.boardData[row-1][column] && this.boardData[row-2][column].innerHTML == piece) {
            points++;
        }
    
        if(this.boardData[row-1] && this.boardData[row-1][column] && this.boardData[row-1][column].innerHTML == piece) {
            points++;
        }
    
        if(this.boardData[row+1] && this.boardData[row+1][column] && this.boardData[row+1][column].innerHTML == piece) {
            points++;
        }
    
        if(this.boardData[row+2] && this.boardData[row+1][column] && this.boardData[row+2][column].innerHTML == piece) {
            points++;
        }
    
        if(points >= 2) {
           return true;
        }

        return false;
    },
    checkWinHorizantal : function(row, column, piece) {
        var points = 0;
    
        if(this.boardData[row] && this.boardData[row][column-2] && this.boardData[row][column-2].innerHTML == piece) {
            points++;
        }
    
        if(this.boardData[row] && this.boardData[row][column-1] && this.boardData[row][column-1].innerHTML == piece) {
            points++;
        }
    
        if(this.boardData[row] && this.boardData[row][column+1] && this.boardData[row][column+1].innerHTML == piece) {
            points++;
        }
    
        if(this.boardData[row] && this.boardData[row][column+2] && this.boardData[row][column+2].innerHTML == piece) {
            points++;
        }
    
        if(points >= 2) {
            return true;
        }
    
        return false;
    },
    checkWinDiagonal : function(row, column, piece) {
        var points = 0;
    
        if(this.boardData[row-2] && this.boardData[row-2][column-2] && this.boardData[row-2][column-2].innerHTML == piece) {
            points++;
        }
    
        if(this.boardData[row-1] && this.boardData[row-1][column-1] && this.boardData[row-1][column-1].innerHTML == piece) {
            points++;
        }
    
        if(this.boardData[row+1] && this.boardData[row+1][column+1] && this.boardData[row+1][column+1].innerHTML == piece) {
            points++;
        }
    
        if(this.boardData[row+2] && this.boardData[row+2][column+2] && this.boardData[row+2][column+2].innerHTML == piece) {
            points++;
        }
    
        if(points >= 2) {
            return true;
        }
    
        return false;
    }, 
    resetGame : function() {
        this.boardElement.innerHTML = "";
        this.boardData = [];
        this.makeBoard();
    },
    executeWin : function() {

        var message = "";

        if(this.currentPlayer == "player1") {
            this.player1Score++;
            message = "Player 1 has won!"
            
        } else {
            this.player2Score++;
            message = "Player 2 has won!"
        }

        alert(message);
        this.setScoreBoard();
        this.resetGame();
    },
    setPlayerTurn : function() {
        console.log("Home Alone");
        if(this.currentPlayer == "player1") {
            this.currentPlayerElement.innerHTML = "Player 1 Turn"
        } else {
            this.currentPlayerElement.innerHTML = "Player 2 Turn"
        }
    },
    setScoreBoard : function() {
        this.scoreBoardElement.innerHTML = "<p>Player 1 Wins: " + this.player1Score + "</p> <p>Player 2 Wins: " + this.player2Score + "</p>";
    },
    startGame : function() {
        this.makeBoard();
        this.setPlayerTurn();
        this.setScoreBoard();
    }

 };
