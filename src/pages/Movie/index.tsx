import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiChevronRight, FiX } from "react-icons/fi";
import { searchMovie } from '../../services/api';
import {
    Container,
    Title,
    Content,
    Poster,
    Overview,
    Details,
    Info,
    NameContainer,
    Popularity,
    ReleaseDate,
    Language,
    DateInfo,
    Trailer,
    ButtonText
} from './styles';
import { useTheme } from 'styled-components';

export function Movie() {
    const { id } = useParams() as unknown as MovieParams;
    const [movie, setMovie] = useState<Movie>({} as Movie);
    const theme = useTheme();
    const navigate = useNavigate();
    async function fetchMovie(id: string) {
        const result = await searchMovie(id);
        console.log('AQI', result);
        setMovie(result);
    }
    function handleGoBack() {
        navigate(-1)
    }
    useEffect(() => {
        fetchMovie(id);

    }, [id])
    return (
        <Container>
            <Content>
                <Info>
                    <FiX style={
                        {
                            marginBottom: 30,
                            alignSelf: 'flex-start',
                            width: 100,
                            cursor: 'pointer'
                        }
                    }
                        size={30}
                        onClick={handleGoBack}
                    />
                    <Popularity>
                        {movie.popularity}
                    </Popularity>
                    <NameContainer>
                        <Title>
                            {movie.title}
                        </Title>
                        <DateInfo>
                            <ReleaseDate>
                                {movie.release_date && new Intl.DateTimeFormat('pt-Br',{month:'2-digit', year:'2-digit'}).format(new Date(movie.release_date))}
                            </ReleaseDate>
                            <Language>
                                {movie.original_language}
                            </Language>
                        </DateInfo>
                    </NameContainer>
                    <Details>
                        <Overview>
                            {movie.overview}
                        </Overview>
                        <Trailer onClick={() => { }}>
                            <ButtonText>Watch Now</ButtonText>
                            <FiChevronRight size={30} color={theme.white_details} />
                        </Trailer>
                    </Details>
                </Info>
                <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            </Content>
        </Container>
    );
};
