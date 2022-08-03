import React from "react";


const ArticleDetail = ({ article }) => {

    return (
        <div className="article-detail">
            <p className="section-tag">{article.section}</p>
            <p className="subsection-tag">{article.subsection}</p>
            <h2 className="title">{article.subsection}</h2>
            <h4>{article.abstract}</h4>
            <h5>{article.byline}</h5>
            <a href={article.url}>Link to full article on NYTimes.com</a>
            <img src={article.multimedia[0].url} alt={article.multimedia[0].caption} />
        </div>
    )
}

export default ArticleDetail