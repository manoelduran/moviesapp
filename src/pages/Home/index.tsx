import React, { useEffect, useState } from 'react';
import { MovieCard } from '../../components/MovieCard';
import { FiArrowUp } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { useTheme } from 'styled-components';
import { SearchBox } from '../../components/SearchBox';
import * as api from '../../services/api';
import {
    Container,
    Header,
    Title,
    Content,
    ContentContainer
} from './styles';


export function Home() {
    const theme = useTheme();
    const [movies, setMovies] = useState<Movie[]>([] as Movie[]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    async function fetchMovies(search: string) {
        try {
            setLoading(true);
            const response = await api.searchMovies(search);
            setMovies(response);
        } catch (err) {
            return console.log(err);
        } finally {
            setLoading(false);
        };
    };
    function handleSelectedMovie(movie: Movie) {
        navigate(`/${String(movie.id)}`);
    };
    useEffect(() => {
        if (search.length > 0) {
            fetchMovies(search);
        } else {
            setSearch('Batman')
        }

    }, [search]);
    return (
        <Container>
            <Header>
                <Title>
                    Startflix
                </Title>
                <SearchBox
                    value={search}
                    onChange={(search) => setSearch(search)}
                />
            </Header>
            <ContentContainer>
                {loading ? <Loading /> :
                    <Content>
                        {movies.map((movie: Movie) => (
                            <MovieCard
                                data={movie}
                                key={movie.id}
                                onClick={() => handleSelectedMovie(movie)}
                            />
                        ))}
                    </Content>
                }
            </ContentContainer>
        </Container>
    );
};