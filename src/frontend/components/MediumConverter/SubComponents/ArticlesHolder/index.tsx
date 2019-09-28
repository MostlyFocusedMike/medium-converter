import React, { useEffect, useState } from "react";
import './styles.css';

interface cardsHolderIntf {
    articles: any[],
}

export const ArticlesHolder: React.FC<cardsHolderIntf> = ({articles}) => {
    return (
        <div id="articles-holder">
            {
                articles.map((article, idx) => {
                    return (
                        <div
                            key={idx}
                        >
                            <p>I am a test</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ArticlesHolder;
