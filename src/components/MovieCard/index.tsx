import React from 'react';
import * as types from '../../declarations/types';
import { observer } from 'mobx-react-lite';
import {
  Container,
  ButtonCard,
  Details,
  Description,
  DescriptionContainer,
} from './styles';

interface MovieCardProps {
  data: types.Movie;
  onClick: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ data, onClick }) => {
  return (
    <Container imgUrl={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`}  >
      <ButtonCard onClick={onClick}>
        <Details>
          <DescriptionContainer>
            <Description>{data.popularity} </Description>
          </DescriptionContainer>
        </Details>
      </ButtonCard>
    </Container>
  );
};

export default observer(MovieCard);