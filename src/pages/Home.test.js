import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import { Header, Body, Footer } from '../components'

afterEach(cleanup)

describe('Homepage', () => {
  test('renders a Header', () => {
     const { getByText } = render(<Header 
                                 content="Header"
                              />)

     // as suggested by Giorgio Polvara a more idiomatic way:
     expect(getByText('Hey Header')).toBeInTheDocument()

    });

    test('renders a Body', () => {
        const { getByText } = render(<Body 
                                    content="Body"
                                 />)
   
        // as suggested by Giorgio Polvara a more idiomatic way:
        expect(getByText('Hey Body')).toBeInTheDocument()
   
       })

       test('renders a Footer', () => {
        const { getByText } = render(<Footer 
                                    content="Footer"
                                 />)
   
        // as suggested by Giorgio Polvara a more idiomatic way:
        expect(getByText('Hey Footer')).toBeInTheDocument()
   
       })
});
