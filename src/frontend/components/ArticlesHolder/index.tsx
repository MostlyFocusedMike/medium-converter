import React, { useEffect, useState, useContext } from "react";
import AppContext from '../../context';
import './styles.css';
import ArticleCard from "../ArticleCard";

const ArticlesHolder: React.FC = () => {
    const { articles } = useContext(AppContext);
    console.log(articles)
    return (
        <div id="articles-holder">
            {
                articles
                    ? articles.map((article: any, idx: number) => {
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
