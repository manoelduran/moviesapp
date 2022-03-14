import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Flex, Input, useTheme } from '@chakra-ui/react';


interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const theme = useTheme();
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
    <Flex
      marginTop='2.5rem'
    >
      <Input
        w={[270, 400, 500, 600]}
        height='40px'
        display='flex'
        borderRadius='5px'
        alignItems='center'
        justifyContent='center'
        background={theme.colors.white_details}
        color={theme.colors.black}
        border='1px'
        borderBlockStartStyle='solid'
        borderBottomColor={theme.colors.border} 
        value={displayValue}
        _placeholder={{ color: theme.colors.black}}
        placeholder="Search for a movie..."
        type="text"
        onChange={handleSearchBox}
      />
    </Flex>
  );
};

export default observer(SearchBox);