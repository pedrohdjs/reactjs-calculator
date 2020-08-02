import React from 'react';
import styled from 'styled-components';

const DisplayWrapper = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    font-size: 200%;
    border-radius: 1vh;
    border: 1px solid var(--black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px 0 10px;
`;

function Display({ value }) {
  return (
    <DisplayWrapper>
      {value}
    </DisplayWrapper>
  );
}

export default Display;
