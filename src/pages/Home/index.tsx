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
import { Loading } from '../../components/Loading';

export function Home() {
    const [movies, setMovies] = useState<Movie[]>([] as Movie[]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    async function fetchMovies(search: string) {
        try {
            setLoading(true)
            const response = await api.searchMovies(search);
            setMovies(response);
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    };
    function handleSelectedMovie(movie: Movie) {
        navigate(`/${String(movie.id)}`);
    }
    useEffect(() => {
        fetchMovies(search)
    }, [search])
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
            {search.length > 0 ?
                <Content>
                    {loading ? <Loading /> :
                        movies.map((movie: Movie) => (
                            <MovieCard
                                data={movie}
                                key={movie.id}
                                onClick={() => handleSelectedMovie(movie)}
                            />
                        ))
                    }
                </Content>
                :
                <Content>
                    <h1 >Why you don't try tape a movie?</h1>
                </Content>
            }
        </Container>
    );
}