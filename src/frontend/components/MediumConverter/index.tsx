import React, { useEffect, useState } from 'react';
import './styles.css';
import Constants from '../../../constants'
import RawMediumToJSON, { niceJSONArticlesIntf } from '../../utilities/raw-medium-to-json';
import ArticlesHolder from './SubComponents/ArticlesHolder';
import JsonArticlesCard from './SubComponents/JsonArticlesCard';
import { ArticleAdapter } from '../../adapters';

// export const MediumConverterContainer: React.FC<PropsItf> = (props) => {
const MediumConverter: React.FC = () => {
    const [rawText, setRawText] = useState('');
    const [articles, setArticles] = useState<niceJSONArticlesIntf[]>([]);
    const [fullJson, setFullJson] = useState<any>([]); // figure out interface

    // useEffect(() => { console.log('rawText: ', rawText); }, [rawText]);
    // useEffect(() => { console.log('articles: ', articles); }, [articles]);
    useEffect(() => {
        ArticleAdapter.getAllWithTags().then(setFullJson);
     }, []);

    useEffect(() => {
        console.log(fullJson);
    }, [fullJson]);

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        setRawText(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const madeArticles = new RawMediumToJSON(rawText, Constants.USERNAME).niceJSONArticles;
        console.log('made: ', madeArticles);
        ArticleAdapter.createAll(madeArticles).then((res => {
            console.log('ees: ', res)
            setFullJson(res);
        }));
    };

    return (
        <div id='medium-converter'>
            <h1>Raw Medium Text Converter</h1>
            <a
                href={`https://medium.com/@${Constants.USERNAME}/latest?format=json`}
                target='_source'
            >
                Go here and click cmd + a to select everything
            </a>
            <form onSubmit={handleSubmit} >
                <label htmlFor='raw-medium-text-input'>Paste your Medium text into here:</label>
                <textarea
                    id='raw-medium-text-input'
                    value={rawText}
                    onChange={handleChange}
                />
                <input
                    type='submit' value='Convert'
                />
            </form>
            {/* this will eventually be the real DB json, not the medium version */}
            <JsonArticlesCard jsonArticles={fullJson} />
            <ArticlesHolder articles={articles}/>
        </div>
    )
}

export default MediumConverter;
