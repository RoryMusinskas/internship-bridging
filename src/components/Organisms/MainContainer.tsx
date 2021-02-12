import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { ApiResponseContainer } from "./ApiResponseContainer";

// styling of the main container
const Container = styled.section`
  height: 100vh;
  width: 66vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const MainContainer: React.FC = () => {
  // set the initial state for the nasaData api request 
  const [nasaData, setNasaData] = useState({      
    title: '',
    explanation: '',
    url: '',
});

  return (
    <Container>
      <ApiResponseContainer nasaData={nasaData}/>
      <div>
        <Button setNasaData={setNasaData} />
      </div>
    </Container>
  );
};
