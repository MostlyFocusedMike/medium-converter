import React, { useState, useContext } from 'react';
import Constants from '../../../constants'
import { ArticleAdapter } from '../../adapters';
import AppContext from '../../context';
import './styles.css';


interface formStateIntf {
    articleUrl: string;
}

const ArticleForm: React.FC = () => {
    const [formState, setFormState] = useState<formStateIntf>({
        articleUrl: '',
    });

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormState({
            ...formState,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} >
            <h2>Individual Article Form</h2>
            <label htmlFor='raw-medium-text-input'>Article URL</label>
            <input
                type='text'
                name='articleUrl'
                onChange={handleChange}
                value={formState.articleUrl}
            />
            <input
                type='submit' value='Save Article'
            />
        </form>
    )
};

export default ArticleForm;
