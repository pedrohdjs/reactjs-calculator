import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Display from '../Display';

const CalculatorWrapper = styled.div`
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-rows: repeat(5, 70px);
    grid-template-columns: repeat(4, 70px);
    padding: 15px;
    border: 1px solid var(--black);
    border-radius: 1vh;

`;

function Calculator() {
  const [currentValue, setCurrentValue] = useState('');

  const updateValue = (ev) => {
    const appendedValue = ev.target.innerHTML;
    let isValidUpdate;
    if (appendedValue !== '.') {
      isValidUpdate = (currentValue.length < 16);
    } else {
      isValidUpdate = !(currentValue.includes('.'));
    }
    setCurrentValue(() => ((isValidUpdate) ? currentValue + appendedValue : currentValue));
  };

  return (
    <CalculatorWrapper>
      <Display value={currentValue} />
      <Button value={7} onClick={updateValue} />
      <Button value={8} onClick={updateValue} />
      <Button value={9} onClick={updateValue} />
      <Button value="+" action />
      <Button value={4} onClick={updateValue} />
      <Button value={5} onClick={updateValue} />
      <Button value={6} onClick={updateValue} />
      <Button value="-" action />
      <Button value={1} onClick={updateValue} />
      <Button value={2} onClick={updateValue} />
      <Button value={3} onClick={updateValue} />
      <Button value="x" action />
      <Button value="." onClick={updateValue} />
      <Button value={0} onClick={updateValue} />
      <Button value="=" action />
      <Button value="/" action />
    </CalculatorWrapper>
  );
}

export default Calculator;
