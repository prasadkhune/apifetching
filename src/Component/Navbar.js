import React from 'react'

export default function Navbar() {
  return (
    <div>


<nav class="navbar navbar-expand-lg navbar-light bg-light" id='nav1'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Shaadi Mubarak</a><br/>
    <img src="SHADI.JPG"style={{height:80,width:100}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" id="heading1">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Wedding Photos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Wedding Videos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Pre Wedding Photos </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>






    </div>
  )
}
