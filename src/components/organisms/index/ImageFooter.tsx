import React from "react";
import styled from "styled-components";
// component imports
import { Title } from "../../atoms/Title";

// styling of the image footer container
const Footer = styled.div`
  height: 20%;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// setting the type for the allowed props
type Props = {
  title: string;
};

export const ImageFooter: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <Footer>
      <Title>{title}</Title>
    </Footer>
  );
};
