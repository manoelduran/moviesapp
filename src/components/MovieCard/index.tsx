import React from 'react';
import {
  Container,
  Poster,
  Title,
  ButtonCard,
  Details,
  Description,
  DescriptionContainer,
  Label
} from './styles';

interface MovieCardProps {
  data: Movie;
  onClick: () => void;
};

export function MovieCard({ data, onClick }: MovieCardProps) {
  return (
    <Container imgUrl={`https://image.tmdb.org/t/p/w350_and_h350_face${data.poster_path}`}  >
      <ButtonCard onClick={onClick}>
        <Details>
          <DescriptionContainer>
            <Label>Popularity:</Label>
            <Description>{data.popularity} </Description>
          </DescriptionContainer>
          <Title>{data.title}</Title>
        </Details>
      </ButtonCard>
    </Container>
  );
};