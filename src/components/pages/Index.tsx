import React, { useState } from "react";
import styled from "styled-components";
import { FavouritesSection } from "../organisms/index/FavouritesSection";
import { MainSection } from "../organisms/index/MainSection";
import { NasaData, Favourites } from "../app.model";

// styles for the wrapper for the app
const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: papayawhip;
`;

export const Index: React.FC = () => {
  // set the initial state for nasaData
  const [nasaData, setNasaData] = useState<NasaData>({
    title: "",
    explanation: "",
    url: "",
  });
  // setting the state, the type is an array of objects with the shape of the favourites type
  const [favourites, setFavourites] = useState<Favourites[]>([]);

  return (
    <Wrapper>
      <FavouritesSection favourites={favourites} />
      <MainSection
        nasaData={nasaData}
        setNasaData={setNasaData}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </Wrapper>
  );
};
