import React, { useState, useContext } from 'react';
import Constants from '../../../constants'
import { ArticleAdapter } from '../../adapters';
import AppContext from '../../context';
import './styles.css';


interface formStateIntf {
    articleLink: string;
    articleTitleSubtitle: string;
    articleImage: string;
    articlePublished: string;
    articleTags: string;
}

const ArticleForm: React.FC = () => {
    const [formState, setFormState] = useState<formStateIntf>({
        articleLink: '',
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

    const pullOutTitleAndSubtitle = () => {
        const [title, subtitle] = formState.articleTitleSubtitle.split('\n');
        return {
            title,
            subtitle,
        }
    }

    const pullOutTags = () => {
        const rawTags = formState.articleTags.split('\n');
        const tags = rawTags.map(tag => ({
            name: tag,
            slug: tag.toLowerCase().replace(' ', '-').replace("'",''),
        }));
        return { tags };
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const { articleImage, articlePublished } = formState;
        const formattedArticle = {
            medium_id: formState.articleLink.split('-').slice(-1)[0],
            link: formState.articleLink,
            image: articleImage,
            first_published_at: new Date(articlePublished).toISOString(),
            ...pullOutTitleAndSubtitle(),
            ...pullOutTags(),
        }
        ArticleAdapter.createOne(formattedArticle).then(console.log);
    };

    // article url is the medium id and slug, and link
    return (
        <form onSubmit={handleSubmit} >
            <h2>Individual Article Form</h2>
            <label htmlFor='article-url'>Article URL</label>
            <input
                type='text'
                id='article-url'
                name='articleLink'
                onChange={handleChange}
                value={formState.articleLink}
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
