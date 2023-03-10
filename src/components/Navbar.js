import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'


export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.text}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-a" href="/about">About</a>
            </li> */}
            
            
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode==='dark'?'Disable Dark Mode':'Enable Dark Mode'}</label>
          </div>
        </div>
      </div>
    </nav>



  )
}
Navbar.propTypes = {
  text: PropTypes.string.isRequired,
  dis: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  text: "Mamali",
  dis: "DOM"
}