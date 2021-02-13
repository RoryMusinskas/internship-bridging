import React, { useState } from "react";
import type {} from "styled-components/cssprop";
import styled from "styled-components";
import { FavouritesSection } from "./components/Organisms/FavouritesSection";
import { MainSection } from "./components/Organisms/MainSection";

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

const App: React.FC = () => {
  // setting the state, the type is an array of objects with the shape of the favourites type
  const [favourites, setFavourites] = useState<Favourites[]>([]);

  // return the favourites and main sections
  return (
    <Wrapper>
      <FavouritesSection favourites={favourites} />
      <MainSection favourites={favourites} setFavourites={setFavourites} />
    </Wrapper>
  );
};

export default App;
