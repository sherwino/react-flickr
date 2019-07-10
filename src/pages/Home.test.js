import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import { Header, Body, Slider } from '../components'

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

       test('renders a Slider', () => {
        const { getByText } = render(<Slider 
                                    content="Slider"
                                 />)
   
        // as suggested by Giorgio Polvara a more idiomatic way:
        expect(getByText('Hey Slider')).toBeInTheDocument()
   
       })
});
