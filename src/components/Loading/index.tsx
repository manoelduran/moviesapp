import { Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { observer } from "mobx-react-lite";

const Loading: React.FC = () => {
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
				Loading...
			</Text>
		</Flex>
	);
};
export default observer(Loading);
