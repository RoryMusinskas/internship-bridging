import React from "react";
import styled from "styled-components";

// styling of the image from the nasaData fetch
const NasaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// setting the allowed type of the props passed
type Props = {
  url: string;
  explanation: string;
  alt: string;
};

export const Image: React.FC<Props> = (props) => {
  const { url, alt } = props;
  return <NasaImage src={url} alt={alt} />;
};
