#!/usr/bin/env node
import readlineSync from "readline-sync";
import {greeting} from "../src/cli.js";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomOperator() {
  const operators = ["+", "-", "*"];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

function calculateExpression(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      return NaN;
  }
}

function playGame() {
  const name = greeting();
  console.log("What is the result of the expression?");
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    const operator = generateRandomOperator();

    console.log(`Question: ${number1} ${operator} ${number2}`);
    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = calculateExpression(number1, number2, operator);

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
