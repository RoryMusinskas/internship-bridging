import React from 'react';
import type {} from 'styled-components/cssprop'
import styled from 'styled-components'
import { TextField } from './components/TextField';

const App: React.FC = () => {
  const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: papayawhip;
  `;

  return (
    <Wrapper>
    <TextField text='Typescript is cool'/>
    </Wrapper>
    );
}

export default App;
