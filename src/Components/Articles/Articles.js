import React from "react";
import './Articles.css'
import ArticleCard from "../ArticleCard/ArticleCard";
import { placeholderData } from "../../Assets/data";

const Articles = ({ articles, currentArticle, setCurrentArticle }) => {

    const articleCards = articles.map((article) => {
        let keyId = article.short_url.slice(-7)
        return <ArticleCard
            article={article} key={keyId} id={keyId} setCurrentArticle={setCurrentArticle} />
    })

    return (
        <div className="articles-container">
            {articleCards}
        </div>
    )
}

export default Articles