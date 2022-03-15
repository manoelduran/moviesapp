import axios from "axios";
import * as types from "../declarations/types";

class API {
	private base;
	constructor() {
		this.base = axios.create({
			baseURL: "https://api.themoviedb.org/3",
		});
	}
	public async searchMovies(search: string): Promise<types.Movie[]> {
		const result = await this.base.get(`/search/movie?api_key=dcd18f60cd807761c94c7adc69c77537&query=${search}`);
		return result.data.results;
	}
	public async searchMovie(id: string): Promise<types.Movie> {
		const result = await this.base.get(`/movie/${id}?api_key=dcd18f60cd807761c94c7adc69c77537`);
		return result.data;
	}
}

const api = new API();

export default api;
