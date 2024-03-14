import React from 'react'
import { Link } from 'react-router-dom'

export default function Nabbar(props) {
  return (
    <div id='head1' >
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <img src='SHADI.JPG'style={{height:150,width:150}}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" id='tab1'>
              <Link className="nav-link active" aria-current="page" to="/Weddingpic"><button class="button" ><span>Wedding Pictures </span></button></Link>
            </li>
            <li className="nav-item"id='tab2'>
              <Link className="nav-link" to="/Weddingvid"><button class="button" ><span>Wedding Videos </span></button></Link>
            </li>
            <li className="nav-item"id='tab3'>
              <Link className="nav-link" to="/Weddingprepic"><button class="button" ><span>Pre Wedding  </span></button></Link>
            </li>
            
            <li className="nav-item"id='tab4'>
              <Link className="nav-link" to="/ContactUs"><button class="button button3">Contact Us</button></Link>
            </li>
            <li className="nav-item"id='tab5'>
              <Link className="nav-link" to="/Explore"><button class="button button2">Explore</button></Link>
            </li>
            
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}

          {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.prasad} />
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div> */}
        </div>
      </div>
    </nav></div>








  )
}
