import React, { useEffect, useState } from 'react';
import './App.css';
import Constants from '../constants'
import RawMediumToJSON, { niceJSONArticlesIntf } from './utilities/raw-medium-to-json';
import { ArticleAdapter } from './adapters';
import ArticlesHolder from './components/ArticlesHolder';
import JsonArticlesCard from './components/JsonArticlesCard';
import MediumJsonLink from './components/MediumLink';
import MediumForm from './components/MediumForm';

// export const MediumConverterContainer: React.FC<PropsItf> = (props) => {
    const App: React.FC = () => {
        const [rawText, setRawText] = useState('');
        const [articles, setArticles] = useState<niceJSONArticlesIntf[]>([]);
        const [fullJson, setFullJson] = useState<any>([]); // figure out interface

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
            <div id='app'>
                <h1>Raw Medium Text Converter</h1>
                <MediumJsonLink />
                <MediumForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    rawText={rawText}
                />
                {/* this will eventually be the real DB json, not the medium version */}
                <JsonArticlesCard jsonArticles={fullJson} />
                <ArticlesHolder articles={articles}/>
            </div>
        )
    }

    export default App;