/* Author: Pogi Tangkad
   JavaScript file for random.html
*/

console.log("JavaScript Random");
const title = "Hello, Random!";
const speed = "scrolldelay='30'";

let displayText = document.getElementById("randomDisplay");
displayText.style = "color: blue";
displayText.innerHTML = `<marquee ${speed}>${title}</marquee><br>`;

//random number between 0 and 1
const num = Math.random();
console.log(num);

//random number between 0 and 1
console.log(Math.round(Math.random() * 10));

//random number between 10 and 20
console.log(10 + Math.round(Math.random() * 10));

/*
multiplies the random value given between 0 and 1,
then multiplies it by the difference beween min and max to get range,
then add the min to shift the range of values to start at min,
then take the floor of that final value to produce a whole number
*/
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNum(4, 33));

let rand = randomNum(1, 100);
let numGuesses = 0;

function reset() {
  rand = randomNum(1, 100);
  numGuesses = 0;
}

function makeGuess() {
  const guessInput = document.getElementById("guess");
  const guess = Number(guessInput.value);
  guessInput.value = "";
  const feedback = document.getElementById("feedback");

  numGuesses++;
  document.getElementById("numGuesses").innerHTML = numGuesses;

  if (guess === rand) {
    feedback.innerHTML = "You guessed it!";
    reset();
  } else {
    if (guess > rand) {
      feedback.innerHTML = "Too High.";
    } else {
      feedback.innerHTML = "Too Low.";
    }
  }
}
