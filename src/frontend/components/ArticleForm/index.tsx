import React, { useState, useContext } from 'react';
import Constants from '../../../constants'
import { ArticleAdapter } from '../../adapters';
import AppContext from '../../context';
import './styles.css';


interface formStateIntf {
    articleUrl: string;
    articleTitleSubtitle: string;
    articleImage: string;
    articlePublished: string;
    articleTags: string;
}

const ArticleForm: React.FC = () => {
    const [formState, setFormState] = useState<formStateIntf>({
        articleUrl: '',
        articleTitleSubtitle: '',
        articleImage: '',
        articlePublished: '',
        articleTags: '',
    });

    const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>): void => {
        setFormState({
            ...formState,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    const formatArticleUrl = () => {
        const uniqueSlug = formState.articleUrl.split('/').slice(-1)[0];
        console.log(uniqueSlug);
        const mediumId = formState.articleUrl.split('-').slice(-1)[0];
        console.log(mediumId);
        return {
            url: formState.articleUrl,
            mediumId,
        }
    }

    const pullOutTitleAndSubtitle = () => {
        const [title, subtitle] = formState.articleTitleSubtitle.split('\n');
        return {
            title,
            subtitle,
        }
    }

    // just get the link and the title and subtite split on newline and tags split on newline
    // fuck it separate all by newline

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        const { articleImage, articlePublished } = formState;
        e.preventDefault();
        const formattedArticle = {
            ...formatArticleUrl(),
            ...pullOutTitleAndSubtitle(),
            image: articleImage,
            first_published_at: new Date(articlePublished).toISOString(),
        }
        console.log(formattedArticle);
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
            <label htmlFor='article-title-subtitle'>Article Title and Subtitle</label>
            <p>The title and subtitle should be separated by a newline</p>
            <textarea
                id='article-title-subtitle'
                name='articleTitleSubtitle'
                onChange={handleChange}
                value={formState.articleTitleSubtitle}
            />
            <label htmlFor='article-published'>Article First Published at</label>
            <input
                type='text'
                id='article-published'
                name='articlePublished'
                onChange={handleChange}
                value={formState.articlePublished}
            />
            <label htmlFor='article-image'>Article Image Link</label>
            <input
                type='text'
                id='article-image'
                name='articleImage'
                onChange={handleChange}
                value={formState.articleImage}
            />

            <label htmlFor='article-tags'>Paste your tags, each separated with a newline:</label>
            <textarea
                id='article-tags'
                name='articleTags'
                value={formState.articleTags}
                onChange={handleChange}
            />
            <input
                type='submit' value='Save Article'
            />
        </form>
    )
};

export default ArticleForm;
