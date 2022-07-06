import PropTypes from 'prop-types'


import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-dark navbar-${props.mode} bg-${props.mode} ` }>
        <div className="container-fluid">
          <a className="navbar-brand" to="#">textutils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#s">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.about}</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/" tabIndex="-1" aria-disabled="true">{props.contact}</a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

            

          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' :'light'} `}>
  <input className="form-check-input" type="checkbox" onClick={props.toggle} id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable Dark mode</label>
  
</div> 
        </div>
       
        
      </nav>
     
    </>
  )
}

Navbar.propTypes = {
  home:PropTypes.string.isRequired,
  about:PropTypes.string.isRequired,
  contact:PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  home:"Home"
 
}