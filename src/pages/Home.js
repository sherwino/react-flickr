import React from 'react';
import { Header, Body } from '../components';

const RefreshRateContext = React.createContext();

const Home = () => (
    <div>
        <Header content="Header" />
        <Body content="Body" />
    </div>
);

export default Home;