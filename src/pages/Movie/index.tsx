import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovie } from '../../services/api';
import {
    Container,
    Title,
    Content,
    Poster,
    Overview,
    Details,
    Info,
    NameContainer
} from './styles';

export function Movie() {
    const { id } = useParams() as unknown as MovieParams;
    const [movie, setMovie] = useState<Movie>({} as Movie);
    async function fetchMovie(id: string) {
        const result = await searchMovie(id);
        console.log('AQI', result);
        setMovie(result);
    }
    useEffect(() => {
        fetchMovie(id);
    }, [id])
    return (
        <Container>
            <Content>
                <Info>
                    <Title>
                        {movie.popularity}
                    </Title>
                    <NameContainer>
                        <Title>
                            {movie.title}
                        </Title>
                        <Title>
                            {movie.release_date}
                        </Title>
                    </NameContainer>
                    <Title>
                        {movie.original_language}
                    </Title>
                    <Details>
                        <Overview>
                            {movie.overview}
                        </Overview>
                    </Details>
                </Info>
                <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            </Content>
        </Container>
    );
};
