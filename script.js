let currentExpression = '';
let display = document.getElementById('result');

function handleButtonClick(event) {
  const buttonValue = event.target.innerText;

  if (buttonValue === 'C') {
    currentExpression = '';
  } else if (buttonValue === '=') {
    try {
      currentExpression = evaluateExpression(currentExpression).toString();
    } catch (error) {
      currentExpression = 'Error';
    }
  } else {
    currentExpression += buttonValue;
  }

  display.value = currentExpression;
}

function evaluateExpression(expression) {
  // Using a custom eval function for more control and security
  return Function(`'use strict'; return (${expression});`)();
}
