// @flow

import React from 'react'
import { withState } from 'recompose'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Galery from './Galery'
import Offer from './Offer'
import Contact from './Contact'
import Admin from './Admin'

const hideMenu = navRef => {
  navRef.className =
    navRef.className === 'nav-bar' ? 'nav-bar responsive' : 'nav-bar'
}

const withRefs = withState('navRef', 'setNavRef', '')

const NavBar = ({ token, logout, navRef, setNavRef }) => {
  return (
    <div className="header">
      <div className="title-wrapper">
        <h1 className="App-title">Active Time</h1>
      </div>
      <nav
        className="nav-bar"
        ref={me => {
          if (me && !navRef) {
            setNavRef(me)
          }
        }}
      >
        <Link to="/" onClick={() => (navRef.className = 'nav-bar')}>
          O NAS
        </Link>
        <Link to="/Galeria" onClick={() => (navRef.className = 'nav-bar')}>
          GALERIA
        </Link>
        <Link to="/Oferta" onClick={() => (navRef.className = 'nav-bar')}>
          OFERTA
        </Link>
        <Link to="/Kontakt" onClick={() => (navRef.className = 'nav-bar')}>
          KONTAKT
        </Link>
        {token.length < 1 ? (
          <Link
            to="/Rejestracja"
            onClick={() => (navRef.className = 'nav-bar')}
          >
            Rejestracja
          </Link>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
        <div
          className="icon"
          onBlur={() => (navRef.className = 'nav-bar')}
          onClick={() => hideMenu(navRef)}
        >
          &#9776;
        </div>
      </nav>
      <style jsx>{`
        .icon {
          position: absolute;
          display: none;
          color: white;
          width: 3.7em;
          text-align: center;
          height: 3.5em;
          line-height: 4em;
          transform: scale(1.5, 1.5);
        }
        .nav-bar {
          display: flex;
          flex-direction: row;
          right: 0;
          height: 100%;
          width: 45em;
          max-width: 70%;
          position: absolute;
          margin: 0;
          padding: 0;
        }
        .header {
          background: rgba(0, 0, 0, 0.8);
          position: fixed;
          width: 100%;
          height: 4.5em;
          z-index: 1;
        }

        .App-title {
          color: white;
          text-decoration: none;
          font-size: 1.5em;
          padding: 0 0.5em 0 0.5em;
          margin: 0.5em 0 0.5em 1em;
          line-height: 2em;
          border: 2px solid white;
          border-radius: 14px;
          position: absolute;
        }

        .nav-bar a:hover {
          background: rgb(255, 255, 255, 0.2);
        }

        .icon:hover {
          background: rgb(255, 255, 255, 0.2);
        }

        a {
          color: white;
          line-height: 4.5em;
          flex: 1;
          text-align: center;
          text-decoration: none;
          display: block;
          text-transform: uppercase;
        }
        @media screen and (max-width: 750px) {
          .nav-bar a {
            display: none;
          }
          .icon {
            display: block;
            right: 0;
          }
          .icon-wrapper {
            position: relative;
            height: 100%;
            width: 100%;
          }
        }
        @media screen and (max-width: 750px) {
          .responsive {
            position: relative;
            float: right;
            flex-direction: column;
            height: auto;
            width: 100%;
            background: black;
            min-width: 300px;
            top: 4.5em;
          }
          .icon {
            position: absolute;
            right: 0;
            top: 0;
          }
          .responsive a {
            float: none;
            display: block;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default withRefs(NavBar)
