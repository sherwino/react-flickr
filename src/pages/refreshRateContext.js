import React, { useState } from 'react';

const RefreshRateContext = React.createContext([{}, () => {}]);

const RefreshRateProvider = (props) => {
  const [state, setState] = useState({
      rate: 0,
      init: true,
      minRate: 0,
      maxRate: 600,
      image: {
        url: 'https://live.staticflickr.com/1960/45670544451_606245a7ce_k.jpg',
        title: 'Wintertime Happiness',
        user: 'Alicja Zmyylowska',
      }
  });
  return (
    <RefreshRateContext.Provider value={[state, setState]}>
      {props.children}
    </RefreshRateContext.Provider>
  );
}

export { RefreshRateContext, RefreshRateProvider };