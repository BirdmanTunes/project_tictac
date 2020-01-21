const canvas_a = document.getElementById("canvas_a");
const canvas_b = document.getElementById("canvas_b");
const canvas_c = document.getElementById("canvas_c");
const canvas_d = document.getElementById("canvas_d");
const canvas_e = document.getElementById("canvas_e");
const canvas_f = document.getElementById("canvas_f");
const canvas_g = document.getElementById("canvas_g");
const canvas_h = document.getElementById("canvas_h");
const canvas_i = document.getElementById("canvas_i");
const playerName = document.getElementById("playerName");
const showScores = document.querySelector('#submitScore');

showScores.style.display = "none";

var boardElements =  [0, 0, 0 ,0, 0, 0, 0, 0, 0];

canvas_a.style.marginRight= "-6px";
canvas_b.style.marginRight= "-6px";
canvas_d.style.marginRight= "-6px";
canvas_e.style.marginRight= "-6px";
canvas_g.style.marginRight= "-6px";
canvas_h.style.marginRight= "-6px";
canvas_a.style.marginBottom= "-6px";
canvas_b.style.marginBottom= "-6px";
canvas_c.style.marginBottom= "-6px";
canvas_d.style.marginBottom= "-6px";
canvas_e.style.marginBottom= "-6px";
canvas_f.style.marginBottom= "-6px";

const ctx_a = canvas_a.getContext("2d");
const ctx_b = canvas_b.getContext("2d");
const ctx_c = canvas_c.getContext("2d");
const ctx_d = canvas_d.getContext("2d");
const ctx_e = canvas_e.getContext("2d");
const ctx_f = canvas_f.getContext("2d");
const ctx_g = canvas_g.getContext("2d");
const ctx_h = canvas_h.getContext("2d");
const ctx_i = canvas_i.getContext("2d");

var playerNameCtx = playerName.getContext("2d");

drawRectangle(ctx_a);
drawRectangle(ctx_b);
drawRectangle(ctx_c);
drawRectangle(ctx_d);
drawRectangle(ctx_e);
drawRectangle(ctx_f);
drawRectangle(ctx_g);
drawRectangle(ctx_h);
drawRectangle(ctx_i);

var player1 = sessionStorage.getItem('playerOneKey');
var player2 = sessionStorage.getItem('playerTwoKey');
var player1Type = "X"
var player2Type = "0"
var player1Score = 0;
var player2Score = 0;
var gameOver = false;

playerNameCtx.font = "15px Arial";

playerNameCtx.clearRect(0, 0, playerName.width, playerName.height)
playerNameCtx.fillText(player1 + " turn", 10, 20);
playerNameCtx.fillText(player1 + ": " + player1Score, 10, 40);
playerNameCtx.fillText(player2 + ": " + player2Score, 10, 60);

var boolean = true;

canvas_a.addEventListener('click', function testF(x, y) {

    if (!gameOver) {
        if (!checkWinCondition()) {
            playerTurn(0, ctx_a);
            checkWinCondition();
        }
    }

}, false);
canvas_b.addEventListener('click', function testF(x, y) {
    if (!gameOver) {

    if (!checkWinCondition()) {
        playerTurn(1, ctx_b);
        checkWinCondition();
    }
}

}, false);
canvas_c.addEventListener('click', function testF(x, y) {
    if (!gameOver) {

    if (!checkWinCondition()) {
        playerTurn(2, ctx_c);
        checkWinCondition();
    }
}

}, false);
canvas_d.addEventListener('click', function testF(x, y) {
    if (!gameOver) {

    if (!checkWinCondition()) {
        playerTurn(3, ctx_d);
        checkWinCondition();
    }
}

}, false);
canvas_e.addEventListener('click', function testF(x, y) {
    if (!gameOver) {

    if (!checkWinCondition()) {
        playerTurn(4, ctx_e);
        checkWinCondition();
    }
}

}, false);
canvas_f.addEventListener('click', function testF(x, y) {
    if (!gameOver) {

    if (!checkWinCondition()) {
        playerTurn(5, ctx_f);
        checkWinCondition();
    }
}

}, false);
canvas_g.addEventListener('click', function testF(x, y) {
    if (!gameOver) {

    if (!checkWinCondition()) {
        playerTurn(6, ctx_g);
        checkWinCondition();
    }
}

}, false);
canvas_h.addEventListener('click', function testF(x, y) {
    if (!gameOver) {

    if (!checkWinCondition()) {
        playerTurn(7, ctx_h);
        checkWinCondition();
    }
}

}, false);
canvas_i.addEventListener('click', function testF(x, y) {
    if (!gameOver) {

    if (!checkWinCondition()) {
        playerTurn(8, ctx_i);
        checkWinCondition();
    }
}

    console.log(boardElements.toString())
}, false);

function submitScore() {
    addRequest(player1, player1Score);
    addRequest(player2, player2Score);
}

function addRequest(player, score) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/add", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        name: player,
        score: score
    }));
}

function playerTurn (gridCoord, canvas_context) {
    if (boardElements[gridCoord] == 0) {
        if (!boolean) {
            playerNameCtx.clearRect(0, 0, playerName.width, playerName.height)
            playerNameCtx.fillText(player1 + " turn", 10, 20);
            playerNameCtx.fillText(player1 + ": " + player1Score, 10, 40);
            playerNameCtx.fillText(player2 + ": " + player2Score, 10, 60);
            boardElements[gridCoord] = 1;
        } else {
            playerNameCtx.clearRect(0, 0, playerName.width, playerName.height)
            playerNameCtx.fillText(player2 + " turn", 10, 20);
            playerNameCtx.fillText(player1 + ": " + player1Score, 10, 40);
            playerNameCtx.fillText(player2 + ": " + player2Score, 10, 60);
            boardElements[gridCoord] = 2;
        }
        drawText(canvas_context);
    }
}

function resetGame() {
    showScores.style.display = "none";
    gameOver = false;
    boolean = true;
    for (let x = 0; x < boardElements.length; x++) {
        boardElements[x] = 0;
    }
    ctx_a.clearRect(0, 0, playerName.width, playerName.height);
    drawRectangle(ctx_a);
    ctx_b.clearRect(0, 0, playerName.width, playerName.height);
    drawRectangle(ctx_b);
    ctx_c.clearRect(0, 0, playerName.width, playerName.height);
    drawRectangle(ctx_c);
    ctx_d.clearRect(0, 0, playerName.width, playerName.height);
    drawRectangle(ctx_d);
    ctx_e.clearRect(0, 0, playerName.width, playerName.height);
    drawRectangle(ctx_e);
    ctx_f.clearRect(0, 0, playerName.width, playerName.height);
    drawRectangle(ctx_f);
    ctx_g.clearRect(0, 0, playerName.width, playerName.height);
    drawRectangle(ctx_g);
    ctx_h.clearRect(0, 0, playerName.width, playerName.height);
    drawRectangle(ctx_h);
    ctx_i.clearRect(0, 0, playerName.width, playerName.height);
    drawRectangle(ctx_i);
    playerNameCtx.clearRect(0, 0, playerName.width, playerName.height)
    playerNameCtx.fillText(player1 + " turn", 10, 20);
    playerNameCtx.fillText(player1 + ": " + player1Score, 10, 40);
    playerNameCtx.fillText(player2 + ": " + player2Score, 10, 60);
}

function checkWinCondition() {
    console.log(boardElements);
    let checkIfWin = false;
    let checkDraw = false;

    if (boardElements[0] == boardElements[1] &&
        boardElements[1] == boardElements[2]) {
            if (boardElements[0] != 0) {
                console.log("DOES IT WORK1")
                checkIfWin = true;
            }
        } else if (boardElements[3] == boardElements[4] &&
            boardElements[4] == boardElements[5]) {
                if (boardElements[3] != 0) {
                    console.log("DOES IT WORK2")
                    checkIfWin = true;
                }
        } else if (boardElements[6] == boardElements[7] &&
            boardElements[7] == boardElements[8]) {
                if (boardElements[6] != 0) {
                    console.log("DOES IT WORK3")
                    checkIfWin = true;
                }
        } else if (boardElements[0] == boardElements[3] &&
            boardElements[3] == boardElements[6]) {
                if (boardElements[0] != 0) {
                    console.log("DOES IT WORK4")
                    checkIfWin = true;
                }
        } else if (boardElements[1] == boardElements[4] &&
            boardElements[4] == boardElements[7]) {
                if (boardElements[1] != 0) {
                    console.log("DOES IT WORK5")
                    checkIfWin = true;
                }
        } else if (boardElements[2] == boardElements[5] &&
            boardElements[5] == boardElements[8]) {
                if (boardElements[2] != 0) {
                    console.log("DOES IT WORK6")
                    checkIfWin = true;
                }
        } else if (boardElements[0] == boardElements[4] &&
            boardElements[4] == boardElements[8]) {
                if (boardElements[0] != 0) {
                    console.log("DOES IT WORK7")
                    checkIfWin = true;
                }
        } else if (boardElements[2] == boardElements[4] &&
            boardElements[4] == boardElements[6]) {
                if (boardElements[2] != 0) {
                    console.log("DOES IT WORK8")
                    checkIfWin = true;
                }
        } else {
            for (let x = 0; x < boardElements.length; x++) {
                if (boardElements[x] != 0) {
                    checkDraw = true;
                } else {
                    checkDraw = false;
                    break;
                }
            }
        }
    
    if (checkIfWin) {
        console.log("wincondition");
        playerNameCtx.clearRect(0, 0, playerName.width, playerName.height)
        if (!boolean) {
            playerNameCtx.fillText(player1 + " wins!", 10, 20);
            playerNameCtx.fillText(player1 + ": " + player1Score, 10, 40);
            playerNameCtx.fillText(player2 + ": " + player2Score, 10, 60);
            if (!gameOver) {
            }
        } else {
            playerNameCtx.fillText(player2 + " wins!", 10, 20);
            playerNameCtx.fillText(player1 + ": " + player1Score, 10, 40);
            playerNameCtx.fillText(player2 + ": " + player2Score, 10, 60);
            if (!gameOver) {
                showScores.style.display = "block";
            }
        }
        if (!gameOver) {
            showScores.style.display = "block";
        }
        gameOver = true

    }
    if (checkDraw) {
        console.log("draw")
        playerNameCtx.clearRect(0, 0, playerName.width, playerName.height)

        playerNameCtx.fillText("DRAW!", 10, 20);
        playerNameCtx.fillText(player1 + ": " + player1Score, 10, 40);
        playerNameCtx.fillText(player2 + ": " + player2Score, 10, 60);
        if (!gameOver) {
            showScores.style.display = "block";
        }
        gameOver = true;
        return true;
    }
    if (gameOver && !checkDraw) {
        if (!boolean) {
            player1Score++
        } else {
            player2Score++;
        }
        boolean = true;
    }
    return checkIfWin;

}

function drawRectangle(canvas_context) {
    canvas_context.beginPath();
    canvas_context.strokeRect(1, 1, 50, 50);
    }

function drawText(canvas_context) {
    canvas_context.font = "35px Arial";
    if(boolean) {
    canvas_context.fillText(player1Type, 14, 37);
    boolean = false;
    } else {
    canvas_context.fillText(player2Type, 14, 37);
    boolean = true;
    }
}

function testJS() {
    var b = document.getElementById('name').value,
        url = 'file:///D:/Programming/tomcat/webapps/examples/welcome.html' + encodeURIComponent(b);

    document.location.href = url;
}