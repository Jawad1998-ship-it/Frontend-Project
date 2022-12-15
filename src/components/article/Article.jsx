import React from 'react';
import './article.css';

const Article = ({imgUrl, date, text}) => {
    
    return (
        <div className='article_container'>
            <div className="article-image">
                <img src={imgUrl} alt="article" />
            </div>
            <div className="article-items">
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )

}

export default Article;