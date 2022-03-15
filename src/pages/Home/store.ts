import { IReactionDisposer, makeAutoObservable, reaction } from "mobx";
import * as types from "../../declarations/types";
import api from "../../services/api";

export class Store {
	public searchDisposer: IReactionDisposer;
	constructor() {
		makeAutoObservable(this);
		this.searchDisposer = reaction(
			() => this.search,
			() => this.fetchMovies(this.search),
		);
	}
	public movie: types.Movie = {} as types.Movie;
	public movies: types.Movie[] = [] as types.Movie[];
	public loading = false;
	public search = "";
	public instaSearch = "Batman";
	public setSearch(search: string) {
		return this.search = search;
	}
	public setMovie(movie: types.Movie) {
		this.movie = movie;
	}
	public setMovies(movies: types.Movie[]) {
		this.movies = movies;
	}

	public setLoading(loading: boolean) {
		this.loading = loading;
	}
	public fetchMovies = async (search: string) => {
		try {
			this.setLoading(true);
			const response = await api.searchMovies(search);
			this.setMovies(response);
		} catch (error) {
			console.log(error);
		} finally {
			this.setLoading(false);
		}
	};
	public fetchMovie = async (id: string) => {
		try {
			this.setLoading(true);
			const response = await api.searchMovie(id);
			this.setMovie(response);
		} catch (err) {
			return console.log(err);
		} finally {
			this.setLoading(false);
		}
	};
	public dispose() {
		this.searchDisposer?.();
	}
}
