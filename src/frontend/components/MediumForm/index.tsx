import React from 'react';
import './styles.css';

interface MediumFormPropsIntf {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rawText: string;
}

const MediumForm: React.FC<MediumFormPropsIntf> = ({ handleSubmit, handleChange, rawText }) => {
    return (
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
    )
};

export default MediumForm;
