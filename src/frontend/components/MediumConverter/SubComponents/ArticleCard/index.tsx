import React from "react";
import './styles.css';

interface cardsHolderIntf {
    article: any, // TODO use real interface
}

export const ArticleCard: React.FC<cardsHolderIntf> = ({article}) => {
    const {
        mediumID,
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
            <p>{title}</p>
            <p>{subtitle}</p>
        </div>
    )
}

export default ArticleCard;
