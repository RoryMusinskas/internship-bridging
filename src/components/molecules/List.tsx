import React from "react";
import styled from "styled-components";

// styles for the unordered list component
const UL = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

export const List: React.FC = (props) => {
  const { children } = props;

  return <UL>{children}</UL>;
};
