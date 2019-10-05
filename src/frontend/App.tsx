import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import Constants from '../constants'
import RawMediumToJSON, { niceJSONArticlesIntf } from './utilities/raw-medium-to-json';
import { ArticleAdapter } from './adapters';
import AppContext from './context';
import ArticlesHolder from './components/ArticlesHolder';
import JsonArticlesCard from './components/JsonArticlesCard';
import MediumJsonLink from './components/MediumLink';
import MediumForm from './components/MediumForm';

// export const MediumConverterContainer: React.FC<PropsItf> = (props) => {
const App: React.FC = () => {
    const [rawText, setRawText] = useState('');
    const [articles, setArticles] = useState<niceJSONArticlesIntf[]>([]);
    const {
        fullJson,
        setFullJson,
    } = useContext(AppContext);

    useEffect(() => {
        ArticleAdapter.getAllWithTags().then(setFullJson);
    }, []);

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        setRawText(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const madeArticles = new RawMediumToJSON(rawText, Constants.USERNAME).niceJSONArticles;
        ArticleAdapter.createAll(madeArticles).then((res => {
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
            <JsonArticlesCard jsonArticles={fullJson} />
            <ArticlesHolder articles={articles}/>
        </div>
    )
}

export default App;