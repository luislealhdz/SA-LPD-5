"use-strict";

const attemptsToGuess = [];
let guessed = false;

const GOOD_NEWS = "Felicidades, adivinaste el número secreto.";
const BAD_NEWS = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
const ERROR_MESSAGE = "El tipo de dato debe ser un número.";

const isNumber = (inputUser) =>
    !isNaN(parseFloat(inputUser)) && isFinite(inputUser);

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const guessNumber = generateRandomNumber();
// console.log(guessNumber);

setTimeout(() => {
    do {
        let userInput = prompt("Adivina el número");

        if (userInput === null || userInput === "") {
            console.log("Juego cancelado por el usuario.");
            break;
        }

        if (isNumber(userInput)) {
            const userGuess = parseInt(userInput);
            attemptsToGuess.push(userGuess);

            if (userGuess === guessNumber) {
                console.log(GOOD_NEWS);
                guessed = true;
                console.log(attemptsToGuess);
            } else {
                console.log(BAD_NEWS);
            }
        } else {
            console.error(ERROR_MESSAGE);
        }
    } while (!guessed);
}, 2000);
