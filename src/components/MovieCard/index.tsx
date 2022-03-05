import React from 'react';
import {
  Container,
  Title,
  ButtonCard,
  Details,
  Description,
  DescriptionContainer,
} from './styles';

interface MovieCardProps {
  data: Movie;
  onClick: () => void;
};

export function MovieCard({ data, onClick }: MovieCardProps) {
  return (
    <Container imgUrl={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`}  >
      <ButtonCard onClick={onClick}>
        <Details>
          <DescriptionContainer>
            <Description>{data.popularity} </Description>
          </DescriptionContainer>
          <Title>{data.title}</Title>
        </Details>
      </ButtonCard>
    </Container>
  );
};