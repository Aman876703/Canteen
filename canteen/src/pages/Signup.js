import axios from "axios";
import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [registerno, setRegisterNo] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:9000/createuser", {
        name,
        email,
        mobileno,
        registerno,
        password,
      })
      .then((response) => {
        alert(response.data.message);
        // Reset form fields manually
        setName("");
        setEmail("");
        setMobileNo("");
        setRegisterNo("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }

  return (
    <div>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        }}
      >
        <br />
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                        <label className="form-label" htmlFor="name">
                          Your Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <label className="form-label" htmlFor="email">
                          Your Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="mobile"
                          className="form-control form-control-lg"
                          onChange={(e) => setMobileNo(e.target.value)}
                          value={mobileno}
                        />
                        <label className="form-label" htmlFor="mobile">
                          Mobile number
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="regno"
                          className="form-control form-control-lg"
                          onChange={(e) => setRegisterNo(e.target.value)}
                          value={registerno}
                        />
                        <label className="form-label" htmlFor="regno">
                          Registration number
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" id="terms" />
                        <label className="form-check-label" htmlFor="terms">
                          I agree to all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Already have an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
