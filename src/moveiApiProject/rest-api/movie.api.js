import axios from "axios";


// http://www.omdbapi.com/?i=tt3896198&apikey=73d3598
// https://www.omdbapi.com/?i=tt3896198&apikey=73d3598&s=super

// http://www.omdbapi.com/?
// i=tt3896198
// &apikey=
// 73d3598
//https://www.omdbapi.com/?apiKey=${API_KEY}
// ${BASE_URL}&s=${searchValue}


// Make sure you add your own API key here // http://www.omdbapi.com/?i=tt3896198&apikey=73d3598
const API_KEY = "73d3598";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;



export const getMovieSearchResult = async (searchValue) => {
    const result = await axios.get(`${BASE_URL}&s=${searchValue}`);

    return result.data;
};

export const getMovieDetails = async (movieId) => {
    const result = await axios.get(`${BASE_URL}&i=${movieId}&plot=full`);

    return result.data;
};
