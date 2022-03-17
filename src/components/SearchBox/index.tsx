import { Flex, Input, useTheme } from "@chakra-ui/react";
import React, { ChangeEvent, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

interface SearchBoxProps {
	value: string;
	onChange: (event: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
	const [displayValue, setDisplayValue] = useState<string>(value);
	const theme = useTheme();
	const Debounce = (fn: (event: string) => void, ms: number): (() => void) => {
		const timeoutId = useRef<number | null>(null);
		const debouncedFn = (): void => {
			window.clearTimeout(timeoutId.current as unknown as number);
			timeoutId.current = window.setTimeout(() => fn(displayValue), ms);
		};
		return debouncedFn;
	};
	const debounceChange: (event: string) => void = Debounce(onChange, 2000);

	const handleSearchBox = (event: ChangeEvent<HTMLInputElement>): void => {
		setDisplayValue(event.target.value);
		debounceChange(event.target.value);
	};
	return (
		<Flex
			marginTop="2.5rem"
		>
			<Input
				w={[250, 400, 500, 600, 800]}
				height="40px"
				display="flex"
				borderRadius="5px"
				alignItems="center"
				justifyContent="center"
				background={theme.colors.white_details}
				color={theme.colors.black}
				border="1px"
				borderBlockStartStyle="solid"
				borderBottomColor={theme.colors.border}
				value={displayValue}
				_placeholder={{ color: theme.colors.black }}
				placeholder="Search for a movie..."
				type="text"
				onChange={handleSearchBox}
			/>
		</Flex>
	);
};

export default observer(SearchBox);
