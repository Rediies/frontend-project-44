#!/usr/bin/env node
import readlineSync from "readline-sync";
import {greeting} from "../src/cli.js";

function generateProgression(start, difference, length) {
  const progression = [];
  for (let i = 0; i < length; i++) {
    const number = start + i * difference;
    progression.push(number);
  }
  return progression;
}

function hideNumber(progression, position) {
  const hiddenProgression = [...progression];
  hiddenProgression[position] = "..";
  return hiddenProgression;
}

function playGame() {
  const name = greeting();
  console.log("What number is missing in the progression?");

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const start = Math.floor(Math.random() * 50) + 1;
    const difference = Math.floor(Math.random() * 10) + 1;
    const length = Math.floor(Math.random() * 6) + 5;
    const position = Math.floor(Math.random() * length);
    const progression = generateProgression(start, difference, length);
    const hiddenProgression = hideNumber(progression, position);

    console.log(`Question: ${hiddenProgression.join(" ")}`);
    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = progression[position];

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
