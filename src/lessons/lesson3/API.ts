import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=e655d4d8';
const axiosInstance = axios.create(configOMB);

export type ApiType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}&page=1`;
        return axiosInstance.get(query);
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
