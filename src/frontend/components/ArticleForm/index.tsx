import React, { useState, useContext } from 'react';
import Constants from '../../../constants'
import { ArticleAdapter } from '../../adapters';
import AppContext from '../../context';
import './styles.css';


interface formStateIntf {
    articleUrl: string;
    articleTitle: string;
    articleSubtitle: string;
    articleImage: string;
    articlePublished: string;
    articleTags: string;
}

const ArticleForm: React.FC = () => {
    const [formState, setFormState] = useState<formStateIntf>({
        articleUrl: '',
        articleTitle: '',
        articleSubtitle: '',
        articleImage: '',
        articlePublished: '',
        articleTags: '',
    });

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormState({
            ...formState,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        setFormState({
            ...formState,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const tags = formState.articleTags
        console.log(tags.split('\n'));
    };

    // article url is the medium id and slug, and link
    return (
        <form onSubmit={handleSubmit} >
            <h2>Individual Article Form</h2>
            <label htmlFor='article-url'>Article URL</label>
            <input
                type='text'
                id='article-url'
                name='articleUrl'
                onChange={handleChange}
                value={formState.articleUrl}
            />
            <label htmlFor='article-title'>Article Title</label>
            <input
                type='text'
                id='article-title'
                name='articleTitle'
                onChange={handleChange}
                value={formState.articleTitle}
            />
            <label htmlFor='article-subtitle'>Article Subtitle</label>
            <input
                type='text'
                id='article-subtitle'
                name='articleSubtitle'
                onChange={handleChange}
                value={formState.articleSubtitle}
            />
            <label htmlFor='article-image'>Article Image Link</label>
            <input
                type='text'
                id='article-image'
                name='articleImage'
                onChange={handleChange}
                value={formState.articleImage}
            />
            <label htmlFor='article-published'>Article First Published at</label>
            <input
                type='text'
                id='article-published'
                name='articlePublished'
                onChange={handleChange}
                value={formState.articlePublished}
            />
            <label htmlFor='article-tags'>Paste your tags, each separated with a newline:</label>
            <textarea
                id='article-tags'
                name='articleTags'
                value={formState.articleTags}
                onChange={handleChangeTextarea}
            />
            <input
                type='submit' value='Save Article'
            />
        </form>
    )
};

export default ArticleForm;
