import React from 'react';
import { Container, Poster, Title, ButtonCard, Details, Description } from './styles';

interface MovieCardProps {
  data: Movie;
  onClick: () => void;
}

export function MovieCard({ data, onClick }: MovieCardProps) {
  return (
    <Container  >
      <ButtonCard onClick={onClick}>
        <Poster src={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`} />
        <Details>
        <Title>{data.title}</Title>
        <Description>Popularity:  {data.popularity} </Description>
        </Details>
      </ButtonCard>
    </Container>
  );
}