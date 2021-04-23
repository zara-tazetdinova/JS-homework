const board = document.querySelector(".board");
const board_letters = document.querySelector(".letters");
const board_numbers = document.querySelector(".numbers");
var letters = ["a", "b", "c", 'd', 'e', "f", "g", "h"];
var index = 0;
var black = false;
var num = 1;



for (var i = 0; i < 8; i++) {
    var letter = document.createElement("li");
    letter.textContent = letters[i];
    board_letters.appendChild(letter);
    var numbers = document.createElement("li");
    numbers.textContent = num++;
    board_numbers.appendChild(numbers);
}

for (var i = 1; i <= 64; i++) {
    const square = document.createElement("div");
    if (black) {
        square.classList.add("square");
        square.classList.add("black");
        index++;
        black = !black;
    } else {
        square.classList.add("square");
        square.classList.add("white");
        index++;
        black = !black;
    }
    board.appendChild(square);
}