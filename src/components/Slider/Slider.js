import React, { useContext } from "react";
import { RefreshRateContext } from '../../pages/refreshRateContext';
import { SldrContainer } from './Slider.styles';

const Slider = () => {
  const [state, setState] = useContext(RefreshRateContext);

  const handleChange = (e => {
    const { value } = e.target;
    
    return setState(state => ({ ...state, rate: value, counter: value }))
  });
 
  return (
    <SldrContainer>
      <output htmlFor="speed">Update image every <span>{state.rate}</span> seconds</output>
      <input
        id="speed"
        type="range"
        name="speed"
        min={state.minRate}
        max={state.maxRate}
        data-sizing="s"
        value={state.rate} 
        onChange={handleChange}
        />
    </SldrContainer>
  )
}
export  { 
  Slider, 

}