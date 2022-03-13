import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Input } from './styles';


interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value)
    setTimeout(() => {
      setTimeout(() => onChange(event.target.value), 2000)
    }, 2000)
  };

  return (
    <Container>
      <Input
        value={displayValue}
        placeholder="Search for a movie..."
        type="text"
        onChange={handleSearch}
      />
    </Container>
  );
};

export default observer(SearchBox);