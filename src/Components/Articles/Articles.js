import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { placeholderData } from "../../Assets/data";

const Articles = ({ articles }) => {
    const articleCards = articles.map((article) => {
        return <ArticleCard content={article} />
    })


    return (
        <div className="articles-container">
            {articleCards}
        </div>
    )
}

export default Articles