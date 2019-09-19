import * as React from 'react';
import './medium-converter.css';
import { useEffect, useState } from "react";

// export interface MediumConverterProps { compiler: string; framework: string; }

// export const MediumConverterContainer: React.FC<PropsItf> = (props) => {
export const MediumConverter: React.FC = () => {
    const [rawText, setRawText] = useState('');

    useEffect(() => { console.log('rawText: ', rawText); }, [rawText]);

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        setRawText(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    return (
        <div id="medium-converter">
            <h1>Raw Medium Text Converter</h1>
            <a href='https://medium.com/@mikecronin92/latest?format=json' target="_source">Go here and click cmd + a to select everything</a>
            <form onSubmit={handleSubmit} >
                <label htmlFor="raw-medium-text-input">Medium Text</label>
                <textarea
                    id="raw-medium-text-input"
                    value={rawText}
                    onChange={handleChange}
                />
                <input
                    type='submit' value='Convert'
                />
            </form>
        </div>
    )
}
