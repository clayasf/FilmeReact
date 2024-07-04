//https://api.themoviedb.org/3/movie/157336?api_key=5379e39f5657b734e34543334bb13f7f

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;