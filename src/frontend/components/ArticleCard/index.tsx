import React from "react";
import './styles.css';

interface cardsHolderIntf {
    article: any, // TODO use real interface
}

export const ArticleCard: React.FC<cardsHolderIntf> = ({article}) => {
    const {
        medium_id,
        title,
        slug,
        link,
        image,
        subtitle,
        metaDescription,
        tags,
    } = article;
    return (
        <div className="article-card">
            <img src={image} alt="image" />
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{metaDescription}</p>
        </div>
    )
}

export default ArticleCard;
