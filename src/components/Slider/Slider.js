import React, { useCallback, useState } from "react";
import { SldrContainer } from './Slider.styles';



const Slider = ({ initialRate, minRate, maxRate }) => {
  // const refreshRate = initialRate;
  const [refreshRate, setRate] = useState(initialRate);
  const handleChange = (e => {
    setRate(e.target.value);
    console.log('Set refresh rate to', e.target.value);
  });

  // const updateRate = (e) => setRate({ rate: e.currentTarget.value });
  // // const updateRate = (e) => console.log('setting rate', e.currentTarget.value);

  // const handleClick = (e) => console.log('setting rate', e.currentTarget.value);

  // useEffect(() => {
  //   console.log('Get a picture every', refreshRate.rate, 'seconds');

  // }, []);

  // const SldrChild = ({ rate }) => {
  //   return (
  //     <>
  //     <div
  //     className="parent"
  //     style={{
  //       "--size": size
  //   }}
  //   />
  //   </>
  //   );
  // };
  

  
  // function changeValue(e) {
  //   val = e.currentTarget.value
  //   console.log('Props value', val)
  // };

  return (
    <SldrContainer>
      <output htmlFor="speed">Update image every <span>{refreshRate}</span> seconds</output>
      <input
        id="speed"
        type="range"
        name="speed"
        min={minRate}
        max={maxRate}
        // defaultValue="0"
        data-sizing="s"
        // onClick={handleChange} 
        value={refreshRate} 
        onChange={handleChange}
        />
        </SldrContainer>
  )
}
export  { 
  Slider, 
  // SldrChild 
}
