import React, { useState } from "react";
import styled from "styled-components";
import { FavouritesSection } from "../organisms/index/FavouritesSection";
import { MainSection } from "../organisms/index/MainSection";

// styles for the wrapper for the app
const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: papayawhip;
`;

// setting the type of the favourites from the main section
type Favourites = {
  title: string;
  url: string;
};

export const Index: React.FC = () => {
  // set the initial state for nasaData
  const [nasaData, setNasaData] = useState({
    title: "",
    explanation: "",
    url: "",
  });
  // setting the state, the type is an array of objects with the shape of the favourites type
  const [favourites, setFavourites] = useState<Favourites[]>([]);

  return (
    <Wrapper>
      <FavouritesSection favourites={favourites} />
      <MainSection nasaData={nasaData} setNasaData={setNasaData} favourites={favourites} setFavourites={setFavourites} />
    </Wrapper>
  );
};
