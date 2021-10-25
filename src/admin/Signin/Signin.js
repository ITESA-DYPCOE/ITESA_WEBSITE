import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";
import { toast } from "material-react-toastify";
import "../Signup/Signup.css";

const SignIn = () => {
  const { admin } = isAuthenticated();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
    didRedirect: false,
  });
  const { email, password, didRedirect } = formData;

  const handleChange = name => e => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    signin({ email, password })
      .then(data => {
        console.log("DATA : ", data);
        if (data.error) {
          setFormData({ ...formData, error: data.error });
          toast.error("error", data.error);
        } else {
          toast.success("success", "Admin Successfully Signed in!");
          setFormData({
            email: "",
            password: "",
            error: "",
          });
          authenticate(data, () => {
            setFormData({ ...formData, didRedirect: true });
          });
        }
      })
      .catch(err => toast.error("error", err));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (admin && admin.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/unapproved/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <>
      <div className="signup-section signup-section-dark">
        <div className="signup-parent">
          <div className="signup-child child2">
            <React.Fragment>
              <div className="signup-card signup-card-dark">
                <h1 className="signup-header-text signup-header-text-dark">
                  Admin SignIn
                </h1>
                <div className="inside-signup">
                  <form>
                    <div className="signup-input signup-input-dark">
                      <input
                        autoComplete="off"
                        id="txt_email"
                        type="text"
                        value={email}
                        placeholder="Your Email"
                        onChange={handleChange("email")}
                      />
                      <i className="fas fa-envelope-open-text"></i>
                    </div>
                    <div className="signup-input signup-input-dark">
                      <input
                        autoComplete="off"
                        id="txt_subject"
                        type="password"
                        value={password}
                        placeholder="Your Password"
                        onChange={handleChange("password")}
                      />
                      <i className="fas fa-pencil-alt"></i>
                    </div>
                    <div>
                      <button
                        className="submit-btn"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                      }}
                    ></div>
                  </form>
                </div>
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
      {performRedirect()}
    </>
  );
};

export default SignIn;
