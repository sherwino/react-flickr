import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Body from './Body'

afterEach(cleanup)

describe('This will test Body', () => {
  test('renders message', () => {
     const { getByText } = render(<Body 
                                 content="Body"
                              />)

     // as suggested by Giorgio Polvara a more idiomatic way:
     expect(getByText('Hey Body')).toBeInTheDocument()
    })
});
