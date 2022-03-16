import * as types from "../../declarations/types";
import { Button, Flex, Image, Text, useMediaQuery, useTheme } from "@chakra-ui/react";
import { FiChevronRight, FiX } from "react-icons/fi";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import React from "react";
import { Store } from "../Home/store";

const Movie: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const [isSmallerThan950] = useMediaQuery("(max-width: 950px)");
	const [isSmallerThan700] = useMediaQuery("(max-width: 700px)");
	const [isSmallerThan300] = useMediaQuery("(max-width: 300px)");
	const theme = useTheme();
	const { id } = useParams() as unknown as types.MovieParams;
	const navigate = useNavigate();
	const handleGoBack =(): void => {
		navigate(-1);
	};
	React.useEffect(() => {
		store.fetchMovie(id);
	}, [store, id]);
	return (
		<Flex
			backgroundColor={theme.colors.black}
		>
			{store.loading ?
				<Loading />
				:
				<Flex
					flexDirection={isSmallerThan950 ? "column" : "row"}
					marginTop={isSmallerThan950 ? "1.5rem" : "none"}
					w="100%"
					alignItems="center"
					justifyContent="center"
				>
					<Flex
						flexDirection="column"
						alignItems="center"
						justifyContent={isSmallerThan700 ? "center" : "space-between"}
					>
						<Flex
							w="100%"
							color={theme.colors.white_details}
							fontSize="1.2rem"
							padding="15px"
							textAlign="left"
							cursor="pointer"
						>
							<FiX
								size={30}
								onClick={handleGoBack}
							/>
						</Flex>
						<Flex
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
						>
							<Text
								fontSize="2.5rem"
								textAlign="center"
								color={theme.colors.white_details}
							>
								{store.movie.title}
							</Text>
							<Flex
								w="100%"
								marginTop="0.5rem"
								alignItems="center"
								justifyContent="space-between"
							>
								<Text
									fontSize="1.2rem"
									textAlign="left"
									color={theme.colors.rate}
								>
									{store.movie.popularity}
								</Text>
								<Text
									fontSize="1.2rem"
									textAlign="left"
									marginLeft="0.5rem"
									color={theme.colors.white_details}
								>
									{store.movie.release_date && new Intl.DateTimeFormat("pt-Br", { month: "2-digit", year: "2-digit" }).format(new Date(store.movie.release_date))}
								</Text>
								<Text
									fontSize="1.2rem"
									textAlign="left"
									marginLeft="0.5rem"
									color={theme.colors.white_details}
								>
									{store.movie.original_language}
								</Text>
							</Flex>
						</Flex>
						<Flex
							padding="30px"
							flexDirection="column"
						>
							<Text
								textAlign="justify"
								fontSize="1.2rem"
								color={theme.colors.white_details}
							>
								{store.movie.overview}
							</Text>
							<Button
								w={isSmallerThan950 ? "240px" : "65%"}
								height="50px"
								marginTop="15px"
								padding="30px"
								display="flex"
								alignItems="center"
								justifyContent="center"
								backgroundColor={theme.colors.red}
								borderRadius="12px"
								onClick={() => { }}
							>
								<Text
									fontSize="1.2rem"
									color={theme.colors.white_details}
								>
                                    Watch Now
								</Text>
								<FiChevronRight size={30} color={theme.colors.white_details} />
							</Button>
						</Flex>
					</Flex>
					<Image
						w={isSmallerThan300 ? "270px" : "100%"}
						h="100vh"
						borderRadius={isSmallerThan950 ? "0%" : "100% 30% 100% 30%"}
						src={`https://image.tmdb.org/t/p/original/${store.movie.poster_path}`}
						alt={store.movie.title}
					/>
				</Flex>
			}
		</Flex>
	);
};
export default observer(Movie);
