import React from 'react';
// import { NavLink } from 'react-router-dom';
import './style.css'
import Logo1 from '../../logo7.png'


export const LandingPage = () => {

  return(
    <>
    {/* <NavLink to="/about">
      <button type="button">
          Get started
      </button>
    </NavLink> */}

    <section id="banner">
      <img src={Logo1} alt="" class="logo" />
      <div class="banner-text">
        <h1>Vibe Box</h1>
        <p>Music for the soul</p>
        <div class="banner-btn">
          <a href="/Artists"><span></span>Get started</a>
          <a href="/about"><span></span>Check artists</a>

        </div>
      </div>
    </section>

    </>
  );
}
