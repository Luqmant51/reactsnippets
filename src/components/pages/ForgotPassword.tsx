import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <section className="login-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="login-form">
            <h3>Forgot Password</h3>

            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>

              <p>
                <Link to="/signup" className="pull-left">
                  Create a new account
                </Link>

                <Link to="#" className="pull-right">
                  Forgot your password?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
