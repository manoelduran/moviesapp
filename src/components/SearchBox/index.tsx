import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Input } from './styles';


interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  function Debounce(fn: Function, ms: number) {
    const timeoutId = useRef<number | null>(null);
    function debouncedFn(...args: any[]) {
      window.clearTimeout(timeoutId.current as unknown as number);
      timeoutId.current = window.setTimeout(() => fn(...args), ms);
    };
    return debouncedFn;
  };

  const debounceChange = Debounce(onChange, 2000);

  function handleSearchBox(event: any) {
    setDisplayValue(event.target.value);
    debounceChange(event.target.value);
  };
  return (
    <Container>
      <Input
        value={displayValue}
        placeholder="Search for a movie..."
        type="text"
        onChange={handleSearchBox}
      />
    </Container>
  );
};

export default observer(SearchBox);