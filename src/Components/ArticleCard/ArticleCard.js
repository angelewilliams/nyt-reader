import React from "react";
import './ArticleCard.css'

const ArticleCard = ({ content }) => {
    return (
        <div className="article-card">
            {content ? <p>{content.title}</p> : 'no article'}
            <img src={content.multimedia[1].url} alt={content.multimedia[0].caption} />

        </div>
    )
}

export default ArticleCard