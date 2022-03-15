import React from "react";
import { Store } from "./store";
import MovieCard from "../../components/MovieCard";
import * as types from "../../declarations/types";
import Loading from "../../components/Loading";
import { observer, useLocalObservable } from "mobx-react-lite";
import SearchBox from "../../components/SearchBox";
import { useNavigate } from "react-router-dom";
import { Flex, Grid, Text, useMediaQuery, useTheme } from "@chakra-ui/react";


const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const [isBiggerThan250] = useMediaQuery("(min-width: 250px)");
	const navigate = useNavigate();
	const theme = useTheme();
	function handleSelectedMovie(movie: types.Movie) {
		navigate(`/${String(movie.id)}`);
	}
	React.useEffect(() => {
		if (store.search.length > 0) {
			return store.dispose;
		} else {
			store.fetchMovies(store.instaSearch);
		}
	}, [store]);
	return (
		<Flex
			w='100%'
			h='100vh'
			flexDirection='column'
			alignItems='center'
		>
			<Flex
				w='100%'
				h='200px'
				padding='30px 0px'
				flexDirection='column'
				alignItems='center'
				backgroundColor={theme.colors.black}
			>
				<Text
					textAlign='center'
					fontSize='1.5rem'
					color={theme.colors.red}
				>
                    Startflix
				</Text>
				<SearchBox
					value={store.search}
					onChange={(search) => store.setSearch(search)}
				/>
			</Flex>
			<Flex
				w='100%'
				h='100%'
				alignItems='center'
				justifyContent='center'
			>
				{store.loading ? <Loading /> :
					<Grid
						h='100%'
						gap='10px'
						textDecoration='none'
						templateColumns={["repeat(1,auto)", "repeat(2,auto)", "repeat(3,auto)", "repeat(4,auto)", "repeat(5,auto)", "repeat(6,auto)", "repeat(7,auto)"]}
					>
						{store.movies.map((movie: types.Movie) => (
							<MovieCard
								data={movie}
								key={movie.id}
								onClick={() => handleSelectedMovie(movie)}
							/>
						))}
					</Grid>
				}
			</Flex>
		</Flex>
	);
};

export default observer(Home);
