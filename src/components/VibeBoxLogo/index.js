import React from 'react'
// import { NavLink } from 'react-router-dom';
import './style.css'
import Logo from '../../logo7.png'


export const VibeBoxLogo = () => {

  return(
    <>
    {/* <NavLink to="/about">
      <button type="button">
          Get started
      </button>
    </NavLink> */}
      <img src={Logo} alt="" class="logo-about" />
    </>
  );
}
