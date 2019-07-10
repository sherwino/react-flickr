import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Slider from './Slider'

afterEach(cleanup)

describe('This will test Slider', () => {
  test('renders message', () => {
     const { getByText } = render(<Slider 
                                 content="Slider"
                              />)

     // as suggested by Giorgio Polvara a more idiomatic way:
     expect(getByText('Hey Slider')).toBeInTheDocument()
    })
});
