const base_uri = "https://api.themoviedb.org/3";
export const api = {
    getLists: async (format = 'movie', filter = 'popular', params = '') => {
        const response = await fetch(
            `${base_uri}/${format}/${filter}?api_key=5daf90e431960f20b1aca24657c54316&language=ru-RU${params}`
        );
        const {results} = await response.json();
        return results;
    },
    getGenres: async (format = 'movie') => {
        const response = await fetch(
            `${base_uri}/genre/${format}/list?api_key=5daf90e431960f20b1aca24657c54316&language=ru-RU`
        );
        const {genres} = await response.json();
        return genres;
    }
};