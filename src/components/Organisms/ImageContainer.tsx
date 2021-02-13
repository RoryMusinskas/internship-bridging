import React from "react";
import styled from "styled-components";
// component imports
import { Image } from "../../components/atoms/Image";

// styling of the image container
const Container = styled.div`
  height: 80%;
  width: 100%;
`;

// setting the type for the allowed props
type Props = {
  url: string;
  explanation: string;
};

export const ImageContainer: React.FC<Props> = (props) => {
  const { url, explanation } = props;

  return (
    <Container>
      <Image url={url} explanation={explanation} alt="Nasa shot of the day" />
    </Container>
  );
};
