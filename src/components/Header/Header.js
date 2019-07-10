import React from 'react';
import { NavBar, Title, Logo } from './Header.styles';
import Slider from '../Slider/Slider';
import flickr from '../../assets/imgs/flickr-logo.svg';
import react from '../../assets/imgs/logo.svg';

const Header = props => {

  return (
    <NavBar>
        <Logo src={react} />
        <Logo src={flickr} />
        <Slider />
        {/* <Title>Hey {props.content}</Title> */}
    </NavBar>
  )
}

export default Header
