// @flow

import React from 'react'
import logo from '../main-photo.png'

const About = () => (
  <div className="about">
    <div className="about-image">
      <img className="image" src={logo} alt="MAIN PHOTO" height="80%" />
    </div>
    <style jsx>{`
      .about {
        position: relative;
        height: 100%;
        width: 100%;
      }

      img {
        width: 100%;
        height: auto;
      }
      .about-image {
        background: black;
        overflow: hidden;
        max-height: 30em;
      }
    `}</style>
  </div>
)

export default About
