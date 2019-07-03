import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Header from './Header'

afterEach(cleanup)

describe('This will test Header', () => {
  test('renders message', () => {
     const { getByText } = render(<Header 
                                 content="Sherwin"
                              />)

     // as suggested by Giorgio Polvara a more idiomatic way:
     expect(getByText('Hey Sherwin')).toBeInTheDocument()
    })
});
