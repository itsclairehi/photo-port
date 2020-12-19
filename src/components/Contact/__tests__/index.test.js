import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
//baseline
it('renders', () => {
    render(<Contact
    />)
})

//snapshot
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />)
        //assert value comparison
        expect(asFragment()).toMatchSnapshot()
    })
})