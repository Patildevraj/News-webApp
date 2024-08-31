//Actions
import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, SET_ARTICLES } from "./types";
import { fetchNews } from "../services/apiService";

export const getNews = (keyword, filters) => async (dispatch) => {
  try {
    let articles = await fetchNews(keyword, filters);

    articles = articles.filter((article) => {
      // Removed articles with no image or description
      return article.urlToImage && article.description;
    });

    dispatch({ type: FETCH_NEWS_SUCCESS, payload: articles });
  } catch (error) {
    dispatch({ type: FETCH_NEWS_FAILURE, payload: error });
  }
};

export const setArticles = (articles) => ({
  type: SET_ARTICLES,
  payload: articles,
});
