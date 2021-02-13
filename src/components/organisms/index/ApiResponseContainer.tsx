import React from "react";
import styled from "styled-components";
// component imports
import { ImageContainer } from "./ImageContainer";
import { ImageFooter } from "./ImageFooter";

// styling of the api div container
const Container = styled.div`
  height: 30vh;
  width: 80%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;

// setting the type for the props being passed in
type Props = {
  nasaData: {
    title: string;
    explanation: string;
    url: string;
  };
};

export const ApiResponseContainer: React.FC<Props> = (props) => {
  const { nasaData } = props;

  return (
    <Container>
      <ImageContainer url={nasaData.url} explanation={nasaData.explanation} />
      <ImageFooter title={nasaData.title} />
    </Container>
  );
};
