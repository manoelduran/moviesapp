import React from 'react';
import * as types from '../../declarations/types';
import { observer } from 'mobx-react-lite';
import { Flex, Link, Text, useTheme } from '@chakra-ui/react';

interface MovieCardProps {
  data: types.Movie;
  onClick: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ data, onClick }) => {
  const theme = useTheme();
  return (
    <Flex
      w='220px'
      height='330px'
      backgroundImage={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`}
    >
      <Link
        w='100%'
        h='100%'
        cursor='default'
        onClick={onClick}>
        <Flex
          w='100%'
          flexDirection='column'
        >
          <Text
            fontSize='1.2rem'
            color={theme.colors.rate}
          >
            {data.popularity}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
};
export default observer(MovieCard);