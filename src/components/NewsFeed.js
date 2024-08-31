import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArticleCard from "./ArticleCard";
import { setArticles } from "../redux/actions/newsActions";

const NewsFeed = () => {
  const { articles } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?sources=espn&apiKey=4f852567f0a64bc99c3960f1cfd0066e");
        const data = await response.json();
        dispatch(setArticles(data.articles.slice(0, 9)));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchArticles();
  }, [dispatch]);

  return (
    <div className="container-fluid py-sm-0 py-md-2 py-lg-3">
      <div className="row">
        {articles.length === 0 ? (
          <h5 className="text-center">Loading...</h5>
        ) : (
          articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
