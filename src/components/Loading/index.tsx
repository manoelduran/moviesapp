import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  Container,
  Text
} from "./styles";
const Loading: React.FC = () => {
  return (
    <Container>
      <Text>Loading...</Text>
    </Container>
  );
};

export default observer(Loading);