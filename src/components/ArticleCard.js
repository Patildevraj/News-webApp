import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../App.css';

const ArticleCard = ({ article }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100 rounded-3">
        <LazyLoadImage
          alt={article.title}
          src={article.urlToImage || 'placeholder.jpg'}
          effect="blur"
          className="card-img-top opacity-75"
          placeholderSrc="placeholder.jpg"
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p><i>{article.author}</i></p>
          <p className="card-text">{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired,
};

export default ArticleCard;
