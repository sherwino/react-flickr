import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Footer from './Footer'

afterEach(cleanup)

describe('This will test Footer', () => {
  test('renders message', () => {
     const { getByText } = render(<Footer 
                                 content="Footer"
                              />)

     // as suggested by Giorgio Polvara a more idiomatic way:
     expect(getByText('Hey Footer')).toBeInTheDocument()
    })
});
