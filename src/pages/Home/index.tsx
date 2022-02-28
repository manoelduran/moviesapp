import React, { useEffect, useState } from 'react';
import { MovieCard } from '../../components/MovieCard';
import { useNavigate } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox';
import * as api from '../../services/api';
import {
    Container,
    Header,
    Title,
    Content
} from './styles';

export function Home() {
    const [movies, setMovies] = useState<Movie[]>([] as Movie[]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    async function fetchMovies(search: string) {
        const response = await api.searchMovies(search);
        setMovies(response)
    };
    function handleSelectedMovie(movie: Movie) {

        navigate(`/${String(movie.id)}`);
    }
    useEffect(() => {
        if (search) {
            setLoading(true)
        }
        try {
            fetchMovies(search)
        }
        catch (error) {
            return console.log(error);
        }
        finally {
            setLoading(false)
        }
    }, [search, loading])
    return (
        <Container>
            <Header>
                <Title>
                    Welcome.
                    Know about millions of movies here,
                    Startapp MDB!
                </Title>
                <SearchBox
                    value={search}
                    onChange={(search) => setSearch(search)}
                />
            </Header>
            <Content>
                {
                    movies.map((movie: Movie) => (
                        <MovieCard
                            data={movie}
                            key={movie.id}
                            onClick={() => handleSelectedMovie(movie)}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}