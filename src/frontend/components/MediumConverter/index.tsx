import React, { useEffect, useState } from "react";
import './styles.css';
import Constants from '../../../constants'
import RawMediumToJSON, { niceJSONArticlesIntf } from '../../utilities/raw-medium-to-json';
import ArticlesHolder from "./SubComponents/ArticlesHolder";

// export const MediumConverterContainer: React.FC<PropsItf> = (props) => {
const MediumConverter: React.FC = () => {
    const [rawText, setRawText] = useState('');
    const [articles, setArticles] = useState<niceJSONArticlesIntf[]>([]);

    // useEffect(() => { console.log('rawText: ', rawText); }, [rawText]);
    // useEffect(() => { console.log('articles: ', articles); }, [articles]);

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        setRawText(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setArticles(new RawMediumToJSON(rawText, Constants.USERNAME).niceJSONArticles);
    };

    return (
        <div id="medium-converter">
            <h1>Raw Medium Text Converter</h1>
            <a
                href={`https://medium.com/@${Constants.USERNAME}/latest?format=json`}
                target="_source"
            >
                Go here and click cmd + a to select everything
            </a>
            <form onSubmit={handleSubmit} >
                <label htmlFor="raw-medium-text-input">Paste your Medium text into here:</label>
                <textarea
                    id="raw-medium-text-input"
                    value={rawText}
                    onChange={handleChange}
                />
                <input
                    type='submit' value='Convert'
                />
                <ArticlesHolder articles={articles}/>
            </form>
        </div>
    )
}

export default MediumConverter;
