import { Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { observer } from "mobx-react-lite";

const Error: React.FC = () => {
	const theme = useTheme();
	return (
		<Flex
			w="100vw"
			h="50vh"
			marginTop="2rem"
			alignItems="center"
			justifyContent="center"

		>
			<Text
				fontSize="2rem"
				textAlign="center"
				color={theme.colors.red}
			>
				Failed to search the movie!
			</Text>
		</Flex>
	);
};
export default observer(Error);
