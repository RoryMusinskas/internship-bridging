import React from 'react';
import styled from 'styled-components'

interface Props{
  text: string;
}

export const TextField: React.FC<Props> = (props) => {
  const {text} = props

  const Title = styled.h1`
  margin-top: 20px;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  `;

  return (
    <Title>{text}</Title>
  )
}