import * as types from "../../declarations/types";
import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { observer } from "mobx-react-lite";


interface MovieCardProps {
	data: types.Movie;
	onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ data, onClick }) => {
	const theme = useTheme();
	return (
		<Flex
			w="220px"
			height="330px"
			textDecoration="none"
			backgroundImage={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`}
		>
			<Link
				w="100%"
				h="100%"
				cursor="default"
				_hover={{
					textDecoration: "none",
				}}
				onClick={onClick}>
				<Flex
					w="100%"
					textDecoration="none"
					flexDirection="column"
				>
					<Text
						fontSize="1.2rem"
						textDecoration="none"
						color={theme.colors.rate}
					>
						{data.popularity}
					</Text>
				</Flex>
			</Link>
		</Flex >
	);
};
export default observer(MovieCard);
