// @flow

import React from 'react'
import logo from '../main-photo.png'

const About = () => (
  <div className="about">
    <div className="about-image">
      {/* <img src={logo} alt="MAIN PHOTO" /> */}
    </div>
    <style jsx>{`
      .about {
        height: 100%;
        width: 100%;
      }

      .about-image {
        /* align-items: center;
        justify-content: center;
        background: black; */
        /* height: 10em;
        width: 100%; */
      }
    `}</style>
  </div>
)

export default About
