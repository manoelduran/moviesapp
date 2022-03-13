import { makeAutoObservable, IReactionDisposer, reaction } from "mobx";
import * as types from '../../declarations/types';
import api from '../../services/api';

export class Store {
    public searchDisposer: IReactionDisposer;
    constructor() {
        makeAutoObservable(this);
        this.searchDisposer = reaction(
            () => this.search,
            () => this.fetchMovies(this.search),
        )
    };

    public movies: types.Movie[] = [];
    public loading: boolean = false;
    public search: string = '';
    public instaSearch: string = 'Batman';
    public setSearch(search: string) {
        return this.search = search;
    };
    public setMovies(movies: types.Movie[]) {
        this.movies = movies;
    };

    public setLoading(loading: boolean) {
        this.loading = loading;
    };
    public fetchMovies = async (search: string) => {
        try {
            this.setLoading(true);
            const response = await api.searchMovies(search);
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
};