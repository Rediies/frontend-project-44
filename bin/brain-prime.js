#!/usr/bin/env node
import readlineSync from "readline-sync";
import {greeting} from "../src/cli.js";

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function playGame() {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question("Your answer: ");
    const isNumberPrime = isPrime(number);
    const correctAnswer = isNumberPrime ? "yes" : "no";

    if (userAnswer === correctAnswer) {
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
