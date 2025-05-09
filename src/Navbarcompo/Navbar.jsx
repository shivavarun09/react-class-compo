import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div>
        <Link className="Homelink" to='https://react-class-based.netlify.app/'>
        <h2>MyStore</h2>
        </Link>  
        </div>

        <div >
          <Link to="/about" className="Nav-links">
            <span >About</span>
          </Link>
          <Link to="/home" className="Nav-links">
            <span>Home</span>
          </Link>

          <Link to='/products' className="Nav-links">
          <span>Produtcs</span>

          </Link>
        </div>
      </div>
    );
  }
}
