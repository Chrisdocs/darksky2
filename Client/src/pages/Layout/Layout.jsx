import React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import "./styles.css";

export default function Layout() {
    return (
      <div>
        <nav id="main-nav">
          <div>
            <ul className="ul-left">
              <li className="li-left">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="li-left">
                <Link className="nav-link" to="/about">About Valoria</Link>
              </li>
              <li className="li-left">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="li-left">
                <Link className="nav-link" to="/map">World Map</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="ul-right">
              <li className="li-right">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="li-right">
                <Link className="nav-link" to="/mynotes">My Notes</Link>
              </li>
            </ul>
          </div>
        </nav>
  

        <div id="outlet-container">          
          <OutletFunc />
        </div>
        
      </div>
    );
  }

function OutletFunc() {
    return(
      <div>
        <Outlet />
      </div>
    )
  }