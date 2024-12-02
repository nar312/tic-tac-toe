const board = Array(9).fill(null);
let currentPlayer = "X";
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const cells = document.querySelectorAll(".cell");
const restartButton = document.getElementById("restart");

function handleClick(e) {
    const cell = e.target;
    const index = Array.from(cells).indexOf(cell);




    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add("taken");


    if (checkWinner()) {
        setTimeout(() => {
            alert(`${currentPlayer} wins!`);
            resetGame();
        }, 100);
        return;
    }


    if (board.every(cell => cell !== null)) {
        setTimeout(() => {
            alert("It's a draw!");
            resetGame();
        }, 100);
        return;
    }


    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
    return winningCombinations.some(combination =>
        combination.every(index => board[index] === currentPlayer)
    );
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("taken");
    });
    currentPlayer = "X";
}


cells.forEach(cell => cell.addEventListener("click", handleClick));
restartButton.addEventListener("click", resetGame);