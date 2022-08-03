import React from "react";
import './Articles.css'
import ArticleCard from "../ArticleCard/ArticleCard";
import { placeholderData } from "../../Assets/data";

const Articles = ({ articles }) => {

    const articleCards = articles.map((article) => {
        let keyId = article.uri.slice(14)
        return <ArticleCard content={article} key={keyId} id={keyId} />
    })

    return (
        <div className="articles-container">
            {articleCards}
        </div>
    )
}

export default Articles