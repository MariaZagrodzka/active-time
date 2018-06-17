// @flow

import React from 'react'
import logo from '../main-photo.png'

const Home = () => (
  <div className="home">
    <div className="home-image">
      <img src={logo} alt="MAIN PHOTO" />
    </div>
    <style jsx>{`
      .home {
        height: 100%;
        width: 100%;
      }

      .home-image {
        align-items: center;
        justify-content: center;
        background: black;
        height: 10em;
        width: 100%;
      }
    `}</style>
  </div>
)

export default Home
