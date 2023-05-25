#!/usr/bin/env node
import readlineSync from "readline-sync";
import {greeting} from "../src/cli.js";

function isEven(num) {
  return num % 2 === 0;
}

function playGame() {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question("Your answer: ");

    const correctAnswer = isEven(number) ? "yes" : "no";

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playGame();
