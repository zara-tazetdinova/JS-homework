const board = document.querySelector(".board");
const board_letters = document.querySelector(".letters");
const board_letters_upper = document.querySelector(".letters_upper");
const board_numbers = document.querySelector(".numbers");
const board_numbers_upper = document.querySelector(".numbers_upper");
var letters = ["a", "b", "c", 'd', 'e', "f", "g", "h"];
var index = 0;
var black = false;
var num = 1;
var num_upper = 1;



for (var i = 0; i < 8; i++) {
    var letter = document.createElement("li");
    letter.textContent = letters[i];
    board_letters.appendChild(letter);
    var numbers = document.createElement("li");
    numbers.textContent = num++;
    board_numbers.appendChild(numbers);
}
for (var i = 0; i < 8; i++) {
    var letter_upper = document.createElement("li");
    letter_upper.textContent = letters[i];
    board_letters_upper.appendChild(letter_upper);
    var numbers_upper = document.createElement("li");
    numbers_upper.textContent = num_upper++;
    board_numbers_upper.appendChild(numbers_upper);
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