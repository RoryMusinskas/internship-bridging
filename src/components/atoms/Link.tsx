import React from "react";
import styled from "styled-components";

// styles for the link
const LinkItem = styled.a`
  color: black;
`;

// setting the type for the allowed props
type Props = {
  href: string;
  target: string;
};

export const Link: React.FC<Props> = (props) => {
  const { children, href, target } = props;

  return (
    <LinkItem href={href} target={target}>
      {children}
    </LinkItem>
  );
};
