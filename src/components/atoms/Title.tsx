import React from "react";
import styled from "styled-components";

// styles for the unordered list component
const H2 = styled.h1`
  font-family: "Lobster", cursive;
  font-weight: 400;
  color: #03446a;
  width: 100%;
  font-size: max(2vw, 30px);
`;

// setting the type for the allowed props
type Props = {
  children: string;
};

export const Title: React.FC<Props> = (props) => {
  const { children } = props;

  return <H2>{children}</H2>;
};
