import React from "react";
import { NavBar, Logo } from './Header.styles';
import { Slider } from '../Slider/Slider';
import flickr from '../../assets/imgs/flickr-logo.svg';
import react from '../../assets/imgs/logo.svg';

const Header = () => {

  return (
    <NavBar>
        <Logo src={react} />
        <Logo src={flickr} />
        <Slider />
    </NavBar>
  )
}

export default Header
