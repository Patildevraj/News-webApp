import axios from 'axios';

//api key
const API_KEY = '4f852567f0a64bc99c3960f1cfd0066e';

export const fetchNews = async (keyword = '', filters = {}) => {
    let url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;

    // keyword query
    if (keyword) {
        url += `&q=${keyword}`;
    }

    // source filter queries

    // if (filters.category) {
    //     url += `&category=${filters.category}`;
    // }

    if (filters.source) {
        url += `&sources=${filters.source}`;
    }

    // date filter query
    if (filters.date) {
        url += `&from=${filters.date}`;
    }

    try {
        const response = await axios.get(url);
        return response.data.articles;
    } catch (error) {
        console.error("Error fetching news", error);
        return [];
    }
};
