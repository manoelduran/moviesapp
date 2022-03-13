import { makeAutoObservable, IReactionDisposer, reaction } from "mobx";
import { useNavigate } from "react-router-dom";
import * as types from '../../declarations/types';
import  api from '../../services/api';

export class Store {
    public searchDisposer: IReactionDisposer;
    constructor() {
        makeAutoObservable(this);
        this.searchDisposer = reaction(
            () => this.search,
            () => this.fetchMovies(),
        );
    };
    // public navigate = useNavigate();
    public movies: types.Movie[] = [];
    public loading: boolean = false;
    public search: string = '';
    public setSearch(search: string) {
        this.search = search;
    };
    public setMovies(movies: types.Movie[]) {
        this.movies = movies;
    };

    public setLoading(loading: boolean) {
        this.loading = loading;
    };
  
    public handleSelectedMovie = (movie: types.Movie) => {
        // this.navigate(`/${String(movie.id)}`);
    }
    public fetchMovies = async () => {
        try {
            this.setLoading(true);
            const response = await api.searchMovies(this.search);
            this.setMovies(response);
        } catch (error) {
            console.log(error);
        } finally {
            this.setLoading(false);
        };
    };
    public dispose() {
        this.searchDisposer?.();
    }
    public get isSearch() {
        return this.search.includes("Batman")
    }
};