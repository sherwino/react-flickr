import React from "react";
import { Header, Body } from "../components";
import { RefreshRateProvider } from "./refreshRateContext";


const Home = () => {
  return (
    <RefreshRateProvider>
        <div>
          <Header />
          <Body />
        </div>
    </RefreshRateProvider>
  );
}

export default Home;
