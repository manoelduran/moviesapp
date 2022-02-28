import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovie } from '../../services/api';
import {
    Container,
    Header,
    Title,
    Poster,
    Content,
    Details
} from './styles';

export function Movie() {
    const { id } = useParams() as unknown as MovieParams;
    const [movie, setMovie] = useState<Movie>({} as Movie);
    async function fetchMovie(id: string) {
        const result = await searchMovie(id)
        console.log('AQI', result)
        setMovie(result)
    }
    useEffect(() => {
        fetchMovie(id);
    }, [id])
    return (
        <Container>
            <Header>
                <Title>
                    {movie.title}
                </Title>
            </Header>
            <Content>
                <Poster src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                <Details>
                    <Title>
                        {movie.adult}
                    </Title>
                    <Title>
                        {movie.popularity}
                    </Title>
                    <Title>
                        {movie.overview}
                    </Title>
                </Details>
            </Content>
        </Container>
    );
}
