import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});
export async function searchMovies(search: string): Promise<Movie[]> {
    const result = await api.get(`/search/movie?api_key=dcd18f60cd807761c94c7adc69c77537&query=${search}`);
    return result.data.results;
};
export async function searchMovie(id: string): Promise<Movie> {
    const result = await api.get(`/movie/${id}?api_key=dcd18f60cd807761c94c7adc69c77537`);
    return result.data;
};