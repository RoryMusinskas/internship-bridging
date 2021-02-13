import React, { useState } from "react";
import styled from "styled-components";
// component imports
import { NextButton } from "../atoms/NextButton";
import { FavouriteButton } from "../atoms/FavouriteButton";
import { ApiResponseContainer } from "./ApiResponseContainer";

// styling of the main container
const Container = styled.section`
  height: 100vh;
  width: 66vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// setting the type for the favourites object
type Favourites = {
  title: string;
  url: string;
};

// setting the type for the allowed props
type Props = {
  // an array of favourite objects
  favourites: Favourites[];

  // the set favourites callback function
  setFavourites: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        url: string;
      }[]
    >
  >;
};

export const MainSection: React.FC<Props> = (props) => {
  const { favourites, setFavourites } = props;

  // set the initial state for nasaData
  const [nasaData, setNasaData] = useState({
    title: "",
    explanation: "",
    url: "",
  });

  return (
    <Container>
      <ApiResponseContainer nasaData={nasaData} />
      <div>
        <FavouriteButton
          nasaData={nasaData}
          favourites={favourites}
          setFavourites={setFavourites}
        />
        <NextButton setNasaData={setNasaData} />
      </div>
    </Container>
  );
};