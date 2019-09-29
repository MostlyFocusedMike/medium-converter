import React, { useEffect, useState } from "react";
import './styles.css';
import ArticleCard from "../ArticleCard";

interface cardsHolderIntf {
    articles: any[],
}

export const ArticlesHolder: React.FC<cardsHolderIntf> = ({articles}) => {
    return (
        <div id="articles-holder">
            {
                articles.length
                    ? articles.map((article, idx) => {
                        return (
                            <div
                                key={`${article.mediumID}`}
                            >
                                <ArticleCard article={article}/>
                            </div>
                        )
                    })
                    : null
            }
        </div>
    )
}

export default ArticlesHolder;
