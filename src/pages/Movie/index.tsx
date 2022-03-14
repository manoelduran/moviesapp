import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiChevronRight, FiX } from "react-icons/fi";
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
    ButtonText,
    Icon
} from './styles';
import { useTheme } from 'styled-components';
import Loading from '../../components/Loading';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Store } from '../Home/store';

interface MovieParams {
    id: string;
};

const Movie: React.FC = () => {
    const store = useLocalObservable(() => new Store());
    const { id } = useParams() as unknown as MovieParams;
    const theme = useTheme();
    const navigate = useNavigate();
    function handleGoBack() {
        navigate(-1);
    };
    React.useEffect(() => {
        store.fetchMovie(id);
    }, [store, id]);
    return (
        <Container>
            {store.loading ?
                <Loading />
                :
                <Content>
                    <Info>
                        <Icon>
                            <FiX
                                size={30}
                                onClick={handleGoBack}
                            />
                        </Icon>
                        <NameContainer>
                            <Title>
                                {store.movie.title}
                            </Title>
                            <DateInfo>
                                <Popularity>
                                    {store.movie.popularity}
                                </Popularity>
                                <ReleaseDate>
                                    {store.movie.release_date && new Intl.DateTimeFormat('pt-Br', { month: '2-digit', year: '2-digit' }).format(new Date(store.movie.release_date))}
                                </ReleaseDate>
                                <Language>
                                    {store.movie.original_language}
                                </Language>
                            </DateInfo>
                        </NameContainer>
                        <Details>
                            <Overview>
                                {store.movie.overview}
                            </Overview>
                            <Trailer onClick={() => { }}>
                                <ButtonText>Watch Now</ButtonText>
                                {/* <FiChevronRight size={30} color={theme.white_details} /> */}
                            </Trailer>
                        </Details>
                    </Info>
                    <Poster src={`https://image.tmdb.org/t/p/original/${store.movie.poster_path}`} />
                </Content>
            }
        </Container>
    );
};
export default observer(Movie);
