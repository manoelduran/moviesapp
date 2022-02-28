import React, { useEffect, useState } from 'react';
import { Container, Input } from './styles';


interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
}

export function SearchBox({ value, onChange }: SearchBoxProps) {
  const [displayValue, setDisplayValue] = useState(value);

  function handleSearchBox(event: any) {
    setDisplayValue(event.target.value);
    onChange(event.target.value);
  }

  return (
    <Container>
      <Input
        value={displayValue}
        placeholder="Escolha seu filme"
        type="text"
        onChange={handleSearchBox}
      />
    </Container>
  );
};