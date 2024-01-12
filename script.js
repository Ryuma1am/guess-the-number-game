const sendResponse = document.querySelector(".send__response");
const numberSend = document.querySelector(".text__send");
const container = document.querySelector("main");
const resetButton = document.querySelector(".reset");
const record = document.querySelector(".record");
const low__or__much = document.querySelector(".low__or__much");
const response = document.querySelector(".response");
let history = [];
let counter = 1;
let randomNumber = Math.floor(Math.random() * 100) + 1;
sendResponse.addEventListener("click", () => {
  let noNumber = document.querySelector(".text");
  noNumber.textContent = "Please, enter a number"
  let results = document.querySelector(".results");
  if (counter < 10) {
    if (numberSend.value === "") {
      noNumber.classList.remove("text__off");
    } else {
      noNumber.classList.add("text__off");
      results.classList.remove("results__off");
      history.push(numberSend.value);
      record.textContent = history;
      if (numberSend.value == randomNumber) {
        response.textContent = "Congratulations! You got it right!";
        low__or__much.textContent = "Correct";
        low__or__much.classList.remove("wrong");
        low__or__much.classList.add("correct");
        let gameGuide = document.querySelector(".game__guide");
        gameGuide.classList.add("game__guide__off");
        resetButton.classList.remove("reset__off");
        resetButton.addEventListener("click", () => {
          gameGuide.classList.remove("game__guide__off");
          results.classList.add("results__off");
          resetButton.classList.add("reset__off");
        });
        history = [];
        randomNumber = Math.floor(Math.random() * 100) + 1;
        counter = 1;
      } else if (numberSend.value < randomNumber) {
        response.textContent = "Last guess was too low!";
        low__or__much.textContent = "Wrong";
        low__or__much.classList.add("wrong");
        counter++;
      } else {
        response.textContent = "Last guess was too high!";
        low__or__much.textContent = "Wrong";
        low__or__much.classList.add("wrong");
        counter++;
      }
        numberSend.value = ""
    }
  } else {
    if (numberSend.value == randomNumber) {
      response.textContent = "Congratulations! You got it right!";
      low__or__much.textContent = "Correct";
      low__or__much.classList.remove("wrong");
      low__or__much.classList.add("correct");
    }else{
        response.textContent = "GAME OVER!!!!!";
    }
    history.push(numberSend.value);
    record.textContent = history;
    let gameGuide = document.querySelector(".game__guide");
    gameGuide.classList.add("game__guide__off");
    resetButton.classList.remove("reset__off");
    noNumber.textContent = `The correct number is ${randomNumber}`
    noNumber.classList.remove("text__off")
    resetButton.addEventListener("click", () => {
      gameGuide.classList.remove("game__guide__off");
      results.classList.add("results__off");
      resetButton.classList.add("reset__off");
      noNumber.classList.add("text__off")
    });
    history = [];
    counter = 1;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numberSend.value = ""
  }
});
