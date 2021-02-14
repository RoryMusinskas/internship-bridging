import React from "react";
import styled from "styled-components";
import { Favourites } from "../app.model";

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
  // the nasaData state object
  nasaData: {
    title: string;
    explanation: string;
    url: string;
  };

  // the array of favourites type
  favourites: Favourites[];

  // the setFavourites callback function
  setFavourites: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        url: string;
      }[]
    >
  >;
};

export const FavouriteButton: React.FC<Props> = (props) => {
  const { nasaData, favourites, setFavourites } = props;
  // get all the title from the array of objects
  const titles = favourites.map((element) => element.title);

  // onClick, check if the title is already in the array of objects, if not, add the current object to the array. This is how the favourites are stored
  const handleClick = () => {
    if (titles.includes(nasaData.title) === false) {
      setFavourites([
        ...favourites,
        { title: nasaData.title, url: nasaData.url },
      ]);
    }
  };

  return <Button onClick={handleClick}>Add to Favourites</Button>;
};
