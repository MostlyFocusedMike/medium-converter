import React from "react";
import './styles.css';

interface cardsHolderIntf {
    jsonArticles: any, // TODO USE REAL INTERFACE
}

export const JsonArticlesCard: React.FC<cardsHolderIntf> = ({ jsonArticles }) => {
    return (
        <div className="json-articles-card">
            <pre>{JSON.stringify(jsonArticles, null, 2) }</pre>
        </div>
    )
}

export default JsonArticlesCard;
