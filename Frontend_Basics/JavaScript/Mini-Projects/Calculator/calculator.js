let calcDisplay = document.getElementById("calc-display");
calcDisplay.style = "cell";
calcDisplay.style = "color:black";
let currentTotal = null;
let nextValue = null;
let pendingOperand = null;
let currentOperand = null;
let inputtingNumber = true;
let finalOutput = false;
let startDecimal = false;
let decimalPlace = 1;

function resetCalc() {
  currentTotal = null;
  nextValue = null;
  pendingOperand = null;
  currentOperand = null;
  inputtingNumber = true;
  finalOutput = false;
  startDecimal = false;
  decimalPlace = 1;
}
resetCalc();

function updateCalc() {
  if (currentOperand && currentTotal) {
    console.log(currentOperand);
    switch (currentOperand) {
      case "*":
        currentTotal *= nextValue;
        break;
      case "/":
        currentTotal /= nextValue;
        break;
      case "+":
        currentTotal += nextValue;
        break;
      case "-":
        currentTotal -= nextValue;
        break;
    }
    calcDisplay.innerText += "\n";
    calcDisplay.innerText += "===========";
    calcDisplay.innerText += "\n";
    calcDisplay.innerText += currentTotal;
    console.log(currentTotal);
    calcDisplay.scrollTop = calcDisplay.scrollHeight;
    currentOperand = null;
  }
}

function numValue(num) {
  if (finalOutput) {
    resetCalc();
    calcDisplay.innerText += "\n";
    calcDisplay.innerText += "------------------";
    calcDisplay.innerText += "\n";
    finalOutput = false;
  }
  if (!inputtingNumber) {
    if (!currentTotal) {
      currentTotal = nextValue;
    }
    currentOperand = pendingOperand;
    pendingOperand = null;
    nextValue = 0;
    startDecimal = false;
    decimalPlace = 1;
    inputtingNumber = true;
    calcDisplay.innerText += "\n";
  }
  if (startDecimal) {
    decimalPlace *= 10;
    nextValue = nextValue + num / decimalPlace;
  } else {
    nextValue = nextValue * 10 + num;
  }
  console.log(nextValue);
  calcDisplay.innerText += num;
  calcDisplay.scrollTop = calcDisplay.scrollHeight;
  calcDisplay.scrollLeft = calcDisplay.scrollWidth;
}

function operation(operand) {
  updateCalc();
  if (nextValue) {
    if (pendingOperand) {
      calcDisplay.innerText =
        calcDisplay.innerText.substring(0, calcDisplay.innerText.length - 1) +
        operand;
    } else {
      calcDisplay.innerText += "\n";
      calcDisplay.innerText += operand;
      calcDisplay.scrollTop = calcDisplay.scrollHeight;
    }
    pendingOperand = operand;
    inputtingNumber = false;
    finalOutput = false;
  }
}

function calcEnter() {
  updateCalc();
  finalOutput = true;
}

function decimal() {
  if (startDecimal) {
    return;
  }
  calcDisplay.innerText += ".";
  startDecimal = true;
}

function clearDisplay() {
  calcDisplay.innerText = "";
  resetCalc();
}
