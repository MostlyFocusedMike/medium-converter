import React, { useEffect, useState, useContext } from "react";
import AppContext from '../../context';
import './styles.css';
import ArticleCard from "../ArticleCard";

interface cardsHolderIntf {
    articles: any[],
}

const ArticlesHolder: React.FC<cardsHolderIntf> = ({ articles }) => {
    const context = useContext(AppContext);
    console.log(context);
    return (
        <div id="articles-holder">
            {
                articles.length
                    ? articles.map((article, idx) => {
                        return (
                            <div
                                key={`${article.medium_id}`}
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
