import React from 'react'
import { SldrContainer } from './Slider.styles';

const Slider = props => {

  return (
    <SldrContainer>
      <label for="speed">speed:</label>
      <input
        id="speed"
        type="range"
        name="speed"
        min="10"
        max="200"
        value="10"
        data-sizing="ms"
      />
  </SldrContainer>
  )
}
export default Slider
