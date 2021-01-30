const base_uri = "https://api.themoviedb.org/3";
const api_key = "api_key=5daf90e431960f20b1aca24657c54316";

export const api = {
    getLists: async (format = 'movie', filter = 'popular', page = '1') => {
        const response = await fetch(
            `${base_uri}/${format}/${filter}?${api_key}&language=ru-RU&page=${page}`
        );
        const {results, total_pages} = await response.json();
        return [results, total_pages];
    },
    getGenres: async (format = 'movie') => {
        const response = await fetch(
            `${base_uri}/genre/${format}/list?${api_key}&language=ru-RU`
        );
        const {genres} = await response.json();
        return genres;
    },
    getMovieWithGenre: async (format = 'movie', id = 80, page = '1') => {
        const response = await fetch(
            `${base_uri}/discover/${format}?${api_key}&language=ru-RU&sort_by=popularity.desc&page=500&with_genres=${id}&page=${page}`
        );
        const {results, total_pages} = await response.json();
        return [results, total_pages];
    },
    searchMovies: async (text) => {
        const response = await fetch(
            `${base_uri}/search/multi?${api_key}&language=ru-RU&query=${text}`
        );
        const {results} = await response.json();
        return results;
    }
};