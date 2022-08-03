import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { placeholderList } from "../../Assets/sections";

const Articles = ({ articles }) => {
    const articleCards = placeholderList.map((article) => {
        return <ArticleCard content={article} />
    })


    return (
        <div className="articles-container">
            {articleCards}
        </div>
    )
}

export default Articles