import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", Conpassword:"" });
  let Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        Navigate("/");
        props.showAlert("Account created Successfully ", "success");
      } else {
        props.showAlert("Invalid Credentials", "danger");
      }
    };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h1 className="text-success"> Sign Up </h1>
        <form className="my-3 row g-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={credentials.name}
              onChange={onChange}
              id="name"
              name="name"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="container my-3">
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={credentials.password}
                onChange={onChange}
                minLength = {5} required
                name="password"
                id="password"
              />
            </div>
          </div>

          <div className="container my-3">
            <div className="mb-3">
              <label htmlFor="Conpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                value={credentials.password}
                onChange={onChange}
                minLength = {5} required
                name="Conpassword"
                id="Conpassword"
              />
            </div>
          </div>

          <div className="container my-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
