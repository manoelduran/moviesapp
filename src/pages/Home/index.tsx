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



const Home: React.FC = () => {
    const store = useLocalObservable(() => new Store());
    React.useEffect(() => {
        return store.dispose
    }, [store.searchDisposer]);
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
                                onClick={() => { }}
                            />
                        ))}
                    </Content>
                }
            </ContentContainer>
        </Container>
    );
};

export default observer(Home);