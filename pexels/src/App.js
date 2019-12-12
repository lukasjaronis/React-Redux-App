import React from 'react';
import './App.css';
import PexelGetter from './components/PexelGetter';
import styled from 'styled-components';

const AppStyles = styled.div`

display: flex;
justify-content: center;
align-items: flex-start;
background: #85dcb8;
height: 100vh;
max-height: 100vh;
min-height: 100vh;
margin: 0 auto;
width: 100%;


`;

function App() {
  return (
    <AppStyles>
    <div className="App">
 <PexelGetter />
    </div>
    </AppStyles>
  );
}

export default App;
