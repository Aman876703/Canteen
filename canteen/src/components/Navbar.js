import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Navbar() {
  var em=localStorage.getItem('emailid')
  function logout()
  {
    localStorage.removeItem('emailid')
    window.location="/"
  }

  if(em==null)
  {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        {/* Toggle button */}
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <Link className="navbar-brand mt-2 mt-lg-0" to="#">
            <img
              src="images/logo.jpg"
              height="45"
              alt="PICT Canteen"
              loading="lazy"
            />
          </Link>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link" to="Snacks">Snacks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Bevereges">Bevereges</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Special">Today's Special</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="About">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Clogin">Canteen Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Signup">Signup</Link>
            </li>
          </ul>
        </div>
        {/* Collapsible wrapper */}

        {/* Right elements */}
        <div className="d-flex align-items-center">
          {/* Icon */}
          <Link className="link-secondary me-3" to="#">
            <i className="fas fa-shopping-cart"></i>
          </Link>

          {/* Notifications */}
          <div className="dropdown">
            <Link
              data-mdb-dropdown-init
              className="link-secondary me-3 dropdown-toggle hidden-arrow"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link className="dropdown-item" to="#">Some news</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">Another news</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">Something else here</Link>
              </li>
            </ul>
          </div>

          {/* Avatar */}
          <div className="dropdown">
            <Link
              data-mdb-dropdown-init
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of Link Man"
                loading="lazy"
              />
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <Link className="dropdown-item" to="#">My profile</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">Settings</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
    </nav>
    <Outlet/>
    <Footer/>
    </div>
  )
  }
  else if(em=='canteen@pict')
  {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
  
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <Link className="navbar-brand mt-2 mt-lg-0" to="#">
              <img
                src="images/logo.jpg"
                height="45"
                alt="PICT Canteen"
                loading="lazy"
              />
            </Link>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="AddMenu">Add menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="UpdateMenu">Update menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="DeleteMenu">Delete menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="PendingOrders">Pending orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={logout}>Logout</Link>
              </li>
            </ul>
          </div>
          {/* Collapsible wrapper */}
  
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Icon */}
            <Link className="link-secondary me-3" to="#">
              <i className="fas fa-shopping-cart"></i>
            </Link>
  
            {/* Notifications */}
            <div className="dropdown">
              <Link
                data-mdb-dropdown-init
                className="link-secondary me-3 dropdown-toggle hidden-arrow"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="#">Some news</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">Another news</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">Something else here</Link>
                </li>
              </ul>
            </div>
  
            {/* Avatar */}
            <div className="dropdown">
              <Link
                data-mdb-dropdown-init
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of Link Man"
                  loading="lazy"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to="#">My profile</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">Settings</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <Outlet/>
      <Footer/>
      </div> 
    )
  }
  else
  {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
  
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <Link className="navbar-brand mt-2 mt-lg-0" to="#">
              <img
                src="images/logo.jpg"
                height="45"
                alt="PICT Canteen"
                loading="lazy"
              />
            </Link>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
            <li className="nav-item">
                <Link className="nav-link" to="Snacks">Snacks</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Bevereges">Bevereges</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Special">Today's Special</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">View cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="orders">Orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={logout}>Logout</Link>
              </li>
            </ul>
          </div>
          {/* Collapsible wrapper */}
  
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Icon */}
            <Link className="link-secondary me-3" to="#">
              <i className="fas fa-shopping-cart"></i>
            </Link>
  
            {/* Notifications */}
            <div className="dropdown">
              <Link
                data-mdb-dropdown-init
                className="link-secondary me-3 dropdown-toggle hidden-arrow"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="#">Some news</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">Another news</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">Something else here</Link>
                </li>
              </ul>
            </div>
  
            {/* Avatar */}
            <div className="dropdown">
              <Link
                data-mdb-dropdown-init
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of Link Man"
                  loading="lazy"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to="#">My profile</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">Settings</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <Outlet/>
      <Footer/>
      </div> 
    )
  }

}
