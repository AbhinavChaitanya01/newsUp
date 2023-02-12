import React, { Component } from "react";
// import { BrowserRouter as  a } from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top" style={{backgroundColor:"#A6BC09"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              newsUp
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business">
                    business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entertainment">
                    entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/general">
                    general
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/health">
                    health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science">
                    science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports">
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">
                    technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
