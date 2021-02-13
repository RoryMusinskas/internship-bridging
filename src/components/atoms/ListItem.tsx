import React from "react";
import styled from "styled-components";

// styles for the list item
const Li = styled.li`
  font-family: "Lobster";
  color: #03446a;
  font-size: max(1.3vw, 20px);
  padding-bottom: 10px;
`;

// setting the type for allowed props
type Props = {
  key: number;
};

export const ListItem: React.FC<Props> = (props) => {
  const { children } = props;

  return <Li>{children}</Li>;
};
