import * as types from "../../declarations/types";
import { IReactionDisposer, makeAutoObservable, reaction } from "mobx";
import api from "../../services/api";

export class Store {
	public searchDisposer: IReactionDisposer;
	constructor() {
		makeAutoObservable(this);
		this.searchDisposer = reaction(
			() => this.search,
			(): void => this.fetchMovies(this.search),
		);
	}
	public movie: types.Movie = {} as types.Movie;
	public movies: types.Movie[] = [] as types.Movie[];
	public loading = false;
	public search = "";
	public instaSearch = "Batman";
	public setSearch(search: string): void {
		this.search = search;
	}
	public setMovie(movie: types.Movie): void {
		this.movie = movie;
	}
	public setMovies(movies: types.Movie[]): void {
		this.movies = movies;
	}

	public setLoading(loading: boolean): void {
		this.loading = loading;
	}
	public fetchMovies: (search: string) => void = async (search: string): Promise<void> => {
		try {
			this.setLoading(true);
			const response = await api.searchMovies(search);
			this.setMovies(response);
		} catch (error: unknown) {
			const consoleError = error as Error;
			throw new Error(`Error: ${consoleError.message} as string`);
		} finally {
			this.setLoading(false);
		}
	};
	public fetchMovie = async (id: string): Promise<void> => {
		try {
			this.setLoading(true);
			const response = await api.searchMovie(id);
			this.setMovie(response);
		} catch (error: unknown) {
			const consoleError = error as Error;
			throw new Error(`Error: ${consoleError.message} as string`);
		} finally {
			this.setLoading(false);
		}
	};
	public dispose = (): void => {
		this.searchDisposer?.();
	};
}
