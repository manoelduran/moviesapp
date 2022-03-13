import React from 'react';
import { Store } from './store';
import MovieCard from '../../components/MovieCard';
import * as types from '../../declarations/types';
import Loading from '../../components/Loading';
import { useLocalObservable, observer } from 'mobx-react-lite';
import SearchBox from '../../components/SearchBox';
import {
    Container,
    Header,
    Title,
    Content,
    ContentContainer
} from './styles';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
    const store = useLocalObservable(() => new Store());
    const navigate = useNavigate();
    function handleSelectedMovie(movie: types.Movie) {
        navigate(`/${String(movie.id)}`);
    }
    React.useEffect(() => {
        if (store.search.length > 0) {
            return store.dispose
        }  else {
            store.fetchMovies(store.instaSearch)
        }
    }, [store, store.instaSearch]);
    return (
        <Container>
            <Header>
                <Title>
                    Startflix
                </Title>
                <SearchBox
                    value={store.search}
                    onChange={(search) => store.setSearch(search)}
                />
            </Header>
            <ContentContainer>
                {store.loading ? <Loading /> :
                    <Content>
                        {store.movies.map((movie: types.Movie) => (
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

export default observer(Home);