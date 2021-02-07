const base_uri = "https://api.themoviedb.org/3";
const api_key = "api_key=5daf90e431960f20b1aca24657c54316&language=ru-RU";

export const api = {
    getMovies: async (format = 'movie', filter = 'popular', page = '1') => {
        const response = await fetch(
            `${base_uri}/${format}/${filter}?${api_key}&page=${page}`
        );
        const {results, total_pages} = await response.json();
        return [results, total_pages];
    },
    getGenres: async (format = 'movie') => {
        const response = await fetch(
            `${base_uri}/genre/${format}/list?${api_key}`
        );
        const {genres} = await response.json();
        return genres;
    },
    getMovieWithGenre: async (format = 'movie', id = 80, page = '1') => {
        const response = await fetch(
            `${base_uri}/discover/${format}?${api_key}&sort_by=popularity.desc&page=500&with_genres=${id}&page=${page}`
        );
        const {results, total_pages} = await response.json();
        return [results, total_pages];
    },
    search: async (text, type) => {
        const response = await fetch(
            `${base_uri}/search/${type}?${api_key}&query=${text}`
        );
        const results = await response.json();
        return results;
    },
    getMovie: async (format = 'movie', id) => {
        const response = await fetch(
            `${base_uri}/${format}/${id}?${api_key}`
        );
        const result = await response.json();
        return result;
    },
    getCredits: async (format = 'movie', id) => {
        const response = await fetch(
            `${base_uri}/${format}/${id}/credits?${api_key}`
        );
        const result = await response.json();
        return result;
    },
    getAnotherMovieInfo: async (format = 'movie', id, query, params = '') => {
        const response = await fetch(
            `${base_uri}/${format}/${id}/${query}?api_key=5daf90e431960f20b1aca24657c54316${params}`
        );
        const {results, keywords} = await response.json();
        if (results !== undefined) {
            return results;
        } else {
            return keywords;
        }
    },
    getMoviesWithKeywords: async (format = "movie", keywords, page = 1) => {
        const response = await fetch(
            `${base_uri}/discover/${format}?${api_key}&sort_by=popularity.desc&with_keywords=${keywords}&page=${page}`
        );
        const {results} = await response.json();
        return results;
    }
};