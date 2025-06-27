let display = document.getElementById('display');
let expression = "";
let lastWasOperator = false;

function appendValue(value) {
  expression += value;
  display.value = expression;
  lastWasOperator = false;
}

function appendOperator(operator) {
  if (expression === "" || lastWasOperator) return;
  expression += operator;
  display.value = expression;
  lastWasOperator = true;
}

function clearDisplay() {
  expression = "";
  display.value = "";
  lastWasOperator = false;
}

function calculate() {
  const tokens = expression.match(/\d+|[+\-*/]/g);
  if (!tokens) return;

  let result = parseInt(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    let operator = tokens[i];
    let nextNum = parseInt(tokens[i + 1]);

    switch (operator) {
      case '+': result += nextNum; break;
      case '-': result -= nextNum; break;
      case '*': result *= nextNum; break;
      case '/': result = Math.floor(result / nextNum); break;
    }
  }

  display.value = result;
  expression = result.toString();
  lastWasOperator = false;
}
