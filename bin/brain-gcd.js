#!/usr/bin/env node
import readlineSync from "readline-sync";
import {greeting} from "../src/cli.js";

function calculateGCD(num1, num2) {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

function playGame() {
  const name = greeting();
  console.log("Find the greatest common divisor of given numbers.");

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = calculateGCD(number1, number2);

    if (Number(userAnswer) === correctAnswer) {
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
