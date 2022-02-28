import React from 'react';
import { Container, Poster, Title, ButtonCard } from './styles';

interface MovieCardProps {
  data: Movie;
  onClick: () => void;
}

export function MovieCard({ data, onClick }: MovieCardProps) {
  return (
    <Container  >
      <ButtonCard onClick={onClick}>
        <Title>{data.title}</Title>
        <Poster src={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`} />
      </ButtonCard>
    </Container>
  );
}