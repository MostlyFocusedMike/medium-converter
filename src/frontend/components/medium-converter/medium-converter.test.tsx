import React from 'react'
import {render, fireEvent} from '@testing-library/react';
import MediumConverter from './medium-converter';

describe('MediumConverter tests', () => {
    it('should render', () => {
        const {debug, queryByText, getByLabelText, getByText} = render(<MediumConverter />)

        debug();
        expect(queryByText('Raw Medium Text Converter')).toBeTruthy();
    })


    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found

    // // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
    // fireEvent.click(getByLabelText(/show/i))

    // // .toBeInTheDocument() is an assertion that comes from jest-dom
    // // otherwise you could use .toBeDefined()
    // expect(getByText(testMessage)).toBeDefined();
})