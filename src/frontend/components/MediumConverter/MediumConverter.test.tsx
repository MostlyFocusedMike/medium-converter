import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import MediumConverter from './MediumConverter';

describe('MediumConverter tests', () => {
    const setup = () => {
        const utils = render(<MediumConverter />);
        const textarea = utils.getByLabelText('paste your Medium', { exact: false });
        return {
            textarea,
            ...utils,
        };
    }

    it('should render', () => {
        const { queryByText } = setup();
        expect(queryByText('Raw Medium Text Converter')).toBeTruthy();
    })

    it('should take text', () => {
        const { textarea } = setup();
        fireEvent.change(textarea, { target: { value: 'dummy data' } });
        // textarea has textContent, inputs have input.value
        expect(textarea.textContent).toBe('dummy data');
    });


    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found

    // // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
    // fireEvent.click(getByLabelText(/show/i))

    // // .toBeInTheDocument() is an assertion that comes from jest-dom
    // // otherwise you could use .toBeDefined()
    // expect(getByText(testMessage)).toBeDefined();
})