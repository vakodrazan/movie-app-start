import React from 'react'
import { render } from "react-dom"
import { MoviesList } from '../MoviesList'

test('<MovieList />', () => {
    const { debug } = render(<MoviesList />);
    debug();
})
