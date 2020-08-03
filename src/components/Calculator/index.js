/* eslint-disable no-useless-escape */
// The escapes inserted were necessary
/* eslint-disable no-eval */
/* I am aware that eval should be avoided for security reasons, but, in this context,
with the function's input validation and stored in the object's state instead of the HTML,
I believe it may be used causing little or no harm */
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Display from '../Display';

const CalculatorWrapper = styled.div`
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-rows: repeat(5, 80px);
    grid-template-columns: repeat(4, 80px);
    padding: 15px;
    border: 1px solid var(--black);
    border-radius: 1vh;

`;

const isOperator = (char) => (char === '+' || char === '-' || char === '*' || char === '/');

const appendNumber = (appendedValue, operationString, setOperationString) => {
  setOperationString(() => operationString + appendedValue);
};

const appendFloatingPointIfValid = (appendedValue, operationString, setOperationString) => {
  const delimiters = ['\\\+', '\\\-', '\\\*', '\\\/']; // +, -, * and / separate the numbers in the operation string
  const numbers = operationString.split(new RegExp(delimiters.join('|'), 'g'));
  const lastNumberString = (numbers[numbers.length - 1]);
  const isValidUpdate = !(lastNumberString.includes('.'));
  setOperationString(() => ((isValidUpdate) ? operationString + appendedValue : operationString));
};

/* If the appeding is not valid, this function replaces operationString's last digit (an operator
in this case) with the new operator */
const appendOperatorIfValid = (appendedValue, operationString, setOperationString) => {
  const isValidUpdate = (operationString.length > 0);
  setOperationString(() => {
    if (isValidUpdate) {
      if (!(isOperator(operationString[operationString.length - 1]))) {
        return operationString + appendedValue;
      }
      return (operationString.substr(0, operationString.length - 1) + appendedValue);
    }
    return operationString;
  });
};

function Calculator() {
  const [operationString, setOperationString] = useState('');

  function handleNumberClick(ev) {
    const value = ev.target.getAttribute('value');
    appendNumber(value, operationString, setOperationString);
  }

  function handleDotClick(ev) {
    const value = ev.target.getAttribute('value');
    appendFloatingPointIfValid(value, operationString, setOperationString);
  }

  function handleOperatorClick(ev) {
    const value = ev.target.getAttribute('value');
    appendOperatorIfValid(value, operationString, setOperationString);
  }

  function handleEqualsClick() {
    if (!isOperator(operationString[operationString.length - 1])) { // Last digit on the string
      const result = eval(operationString);
      setOperationString(String(result));
    }
  }

  return (
    <CalculatorWrapper>

      <Display value={operationString} />

      <Button value={7} onClick={handleNumberClick} />
      <Button value={8} onClick={handleNumberClick} />
      <Button value={9} onClick={handleNumberClick} />
      <Button value="+" onClick={handleOperatorClick} action />

      <Button value={4} onClick={handleNumberClick} />
      <Button value={5} onClick={handleNumberClick} />
      <Button value={6} onClick={handleNumberClick} />
      <Button value="-" onClick={handleOperatorClick} action />

      <Button value={1} onClick={handleNumberClick} />
      <Button value={2} onClick={handleNumberClick} />
      <Button value={3} onClick={handleNumberClick} />
      <Button value="*" onClick={handleOperatorClick} action />

      <Button value="." onClick={handleDotClick} />
      <Button value={0} onClick={handleNumberClick} />
      <Button value="=" onClick={handleEqualsClick} action />
      <Button value="/" onClick={handleOperatorClick} action />

    </CalculatorWrapper>
  );
}

export default Calculator;
