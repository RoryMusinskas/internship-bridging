import React, { useEffect, useCallback } from "react";
import styled from "styled-components";

// styling of the NextButton
const Button = styled.button`
  font-family: "Lobster", cursive;
  font-size: 2em;
  margin: 1em;
  padding: 5px 16px;
  border: 0;
  border-radius: 35px;
  background-color: #03446a;
  color: white;
`;

// set the types that the props can be
type Props = {
  setNasaData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      explanation: string;
      url: string;
    }>
  >;
};

export const NextButton: React.FC<Props> = (props) => {
  const { setNasaData } = props;
  // asserting the type of the .env.development variable
  const nasaApi: string = process.env.REACT_APP_NASA_API as string;

  // function to fetch the random api data from the nasaApi endpoint
  // wrapped in useEffect to allow to have useEffect to have correct dependencies but only run once on component mount or when invoked
  const getNasaData = useCallback(async () => {
    const response = await fetch(nasaApi);
    const nasaData = await response.json();

    setNasaData({
      title: nasaData[0].title,
      explanation: nasaData[0].explanation,
      url: nasaData[0].url,
    });
  }, [nasaApi, setNasaData]);

  // get random nasa photo of the day data on component mount
  useEffect(() => {
    getNasaData();
  }, [getNasaData]);

  return <Button onClick={getNasaData}>Next</Button>;
};
