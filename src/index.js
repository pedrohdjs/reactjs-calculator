import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';
import Calculator from './components/Calculator';

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <BodyWrapper>
      <Calculator />
    </BodyWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
);
