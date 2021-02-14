import React from "react";
import styled from "styled-components";
// component imports
import { Title } from "../../atoms/Title";
import { ListItem } from "../../atoms/ListItem";
import { Link } from "../../atoms/Link";
import { List } from "../../molecules/List";
import { Favourites } from "../../app.model";

// styles for the favourites container
const Container = styled.section`
  height: 100vh;
  width: 33vw;
  border-right: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

// setting the type for the favourites array, it's an array of favourite objects
type Props = {
  favourites: Favourites[];
};

export const FavouritesSection: React.FC<Props> = (props) => {
  const { favourites } = props;

  return (
    <Container>
      <Title>Favourites</Title>
      {/* Return a list of links with all the saved favourites info */}
      <List>
        {favourites.map((element, index) => {
          return (
            <ListItem key={index}>
              <Link href={element.url} target="blank">
                {element.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
