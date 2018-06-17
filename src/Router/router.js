<<<<<<< HEAD
// // @flow
//
// import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Home from '../pages/Home'
// import About from '../pages/About'
// import Galery from '../pages/Galery'
// import Offer from '../pages/Offer'
// import Contact from '../pages/Contact'
// import Admin from '../pages/Admin'
//
// const NavBar = () => (
//   <Router>
//     <div className="router">
//       <h1 className="App-title">Active Time</h1>
//       <ul className="nav-bar">
//         <li>
//           <Link to="/">O NAS</Link>
//         </li>
//         <li>
//           <Link to="/Galeria">GALERIA</Link>
//         </li>
//         <li>
//           <Link to="/Oferta">OFERTA</Link>
//         </li>
//         <li>
//           <Link to="/Kontakt">KONTAKT</Link>
//         </li>
//       </ul>
//       <Route exact path="/" component={About} />
//       <Route path="/Galeria" component={Galery} />
//       <Route path="/Oferta" component={Offer} />
//       <Route path="/Kontakt" component={Contact} />
//       <Route path="/Admin" component={Admin} />
//       <style jsx>{`
//         .router {
//           display: flex;
//           flex-direction: row;
//           background: black;
//           width:100%;
//           height:100px;
//         }
//         .nav-bar {
//             display: flex;
//             flex-direction: row;
//             right:1em;
//             height: auto;
//             min-width: 50%;
//             max-width: 70%;
//             position: absolute;
//             margin:0;
//             padding:0;
//           }
//
//           .App-title {
//             color: white;
//             font-size: 1.5em;
//             padding: 0px;
//             margin: 10px 0 0 20px;
//           }
//
//           li {
//             height: 70px;
//             width: 150px;
//             text-align: center;
//             line-height: 70px;
//           }
//
//           a {
//             color: white;
//             text-decoration: none;
//           }
//
//         }
//       `}</style>
//     </div>
//   </Router>
// )
// export default NavBar
=======
// @flow

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Galery from "../pages/Galery";
import PriceList from "../pages/PriceList";
import Contact from "../pages/Contact";
import Register from "../pages/Register";

const RouterLinks = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Strona Główna</Link>
        </li>
        <li>
          <Link to="/O nas">O nas</Link>
        </li>
        <li>
          <Link to="/Galeria">Galeria</Link>
        </li>
        <li>
          <Link to="/Cennik">Cennik</Link>
        </li>
        <li>
          <Link to="/Kontakt">Kontakt</Link>
        </li>
        <li>
          <Link to="/Rejestracja">Rejestracja</Link>
        </li>
      </ul>
      <Route path="/" component={Home} />
      <Route path="/O nas" component={About} />
      <Route path="/Galeria" component={Galery} />
      <Route path="/Cennik" component={PriceList} />
      <Route path="/Kontakt" component={Contact} />
      <Route path="/Rejestracja" component={Register} />
    </div>
  </Router>
);
export default RouterLinks;
>>>>>>> 3a3a716268a01203c94fcd158907db4da7428de5
