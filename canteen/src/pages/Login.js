import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {
  var [email,setemail]=useState('')
  var [password,setpassword]=useState('')

  function handelsubmit(e)
  {
      e.preventDefault()
      axios.get('http://localhost:9000/login/${email}/${password}').then((response)=>{
        if(response.data !=null)
        {
         // alert("Login succesful")
          localStorage.setItem('emailid',email)
          window.location="/"
        }
        else
        {
          alert("Invalid email or password")
        }
      })
  }

  return (
    <div><br></br><br></br>
        <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img 
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" 
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handelsubmit}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0"></p>
              </div>
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter email address" />
                <label className="form-label" htmlFor="form3Example3" 
                onChange={(e)=>{setemail(e.target.value)}} value={email}>Email address</label>
              </div>
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                <label className="form-label" htmlFor="form3Example4"
                 onChange={(e)=>{setpassword(e.target.value)}} value={password}>Password</label>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <a href="./Signup" className="link-danger">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  )
}
