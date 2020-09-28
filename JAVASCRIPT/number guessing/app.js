//Selectors
const input = document.getElementById("input");
const button = document.getElementById("button");

//creating elements
const guesses = document.getElementById('guesses');
const lowOrhigh = document.getElementById('lowOrhigh');
const result = document.getElementById("final");


//Assigning values
let guessCount = 1;
let randomNum = randomNumber();

//Event listerners

button.addEventListener('click', function () {

    if (input.value > 100) {
        alert("Enter valid value");
        input.value = "";
    }
    else if (input.value < 0) {
        alert("Enter valid value");
        input.value = "";
    }
    else {
        if (guessCount === 1) {
            guesses.textContent = "Your guesses are:";
        }
        guesses.textContent += input.value + ' ';
        if (input.value == randomNum) {
            result.textContent = "congratulations you have won";
            document.body.style.backgroundColor = 'LightGreen';
            lowOrhigh.textContent = '';
            gameover();
        }
        else if (guessCount == 10) {
            final.textContent = "game over";
            gameover();
        }
        else {
            final.textContent = 'Wrong';
            document.body.style.backgroundColor = 'Tomato';
            if (input.value > randomNum) {
                lowOrhigh.textContent = "input is high";
            }
            else {
                lowOrhigh.textContent = "input is low";
            }


        }
        guessCount++;
        input.value = '';
        input.focus();
    }




})

//Functions
function randomNumber() {
    let random = Math.floor(Math.random() * 101);
    return random;
}
function gameover() {
    input.disabled = true;
    button.disabled = true;
    let reset = document.createElement('button');
    reset.textContent = "start new game";
    document.body.append(reset);
    reset.addEventListener('click', resetGame());
}
function resetGame() {
    guessCount = 1;
    input.disabled = false;
    button.disabled = false;
    input.value = '';
    input.focus();
    document.body.style.backgroundColor = 'White';
    const para = document.querySelectorAll('p');
    const para = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < para.length ; i++) {
    para[i].textContent = '';
}
    reset.parentNode.removeChild(reset);
}