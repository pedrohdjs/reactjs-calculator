import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    font-size: 300%;
    background-color: var(--button-1);
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: var(--white);

    &:hover {
        cursor: pointer;
        transition: 200ms;
        color: var(--grayMedium);
        font-size: 350%;
    }

    &.number{
      background-color: var(--button-1);
    }
    
    &.action{
      background-color: var(--button-2);
    }

`;

function Button({
  value, onClick, action,
}) {
  const isActionButton = action;
  const styleClass = (isActionButton) ? 'action' : '';
  return (
    <ButtonWrapper onClick={onClick} className={styleClass}>
      {value}
    </ButtonWrapper>
  );
}

export default Button;
