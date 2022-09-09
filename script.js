"use strict";

const correctNumber = Math.floor(Math.random() * 20);
console.log(correctNumber);
let userNumber;
let highscore = Number(document.querySelector(".highscore").textContent);
let score = Number(document.querySelector(".score").textContent);

const compareTrue = function (userNumber) {
  userNumber = document.querySelector(".guess").value;
  if (userNumber == correctNumber) {
    correctFunction();
  } else if (userNumber > correctNumber) {
    document.querySelector(".message").textContent = "Too high...";
  } else if (userNumber < correctNumber) {
    document.querySelector(".message").textContent = "Too low...";
  }
  score = score - 1;
  document.querySelector(".score").textContent = score;
};

const correctFunction = function () {
  document.body.style.backgroundColor = "#60b347";
  if (highscore < score) {
    highscore = score;
  }
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".number").textContent = correctNumber;
};

const againFunction = function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
};

const againClick = document
  .querySelector(".btn.again")
  .addEventListener("click", againFunction);
const checkClick = document
  .querySelector(".btn.check")
  .addEventListener("click", compareTrue);
