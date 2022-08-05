import React from "react";
import placeholder from './../../Assets/noImage.png'
import './ArticleCard.css'
import { Link } from "react-router-dom";

const ArticleCard = ({ article, id, setCurrentArticle }) => {

    const handleSelectArticle = () => {
        setCurrentArticle(article)
    };

    return (
        <Link to={`/nyt-reader/${id}`} className="article-card" id={id} onClick={() => handleSelectArticle()}>
            {article ? <p>{article.title}</p> : 'no article'}
            {article.multimedia[1].url ? <img className="card-img" src={article.multimedia[1].url} alt={article.multimedia[0].caption} /> : <img className="card-img" src={placeholder} alt="placeholder image" />}

        </Link>
    )
}

export default ArticleCard