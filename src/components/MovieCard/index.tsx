import React from 'react';
import { Container, Poster, Title, ButtonCard, Details, Description, DescriptionContainer, Label } from './styles';

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
          <DescriptionContainer>
            <Label>Popularity:</Label>

            <Description>{data.popularity} </Description>
          </DescriptionContainer>
        </Details>
      </ButtonCard>
    </Container>
  );
}