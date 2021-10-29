import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "../../../firebase/config";
import { Redirect, useHistory } from "react-router-dom";
import { verifyUserGoogleAuth } from "../../helper/authapicalls";
import { authenticate, isAuthenticated } from "../helper/index";
import { toast } from "material-react-toastify";
import "./Signup.css";

const SignIn = () => {
  const admin = isAuthenticated();
  const history = useHistory();

  const [formData, setFormData] = useState({
    error: "",
    didRedirect: false,
  });
  const { didRedirect } = formData;

  const loginWithPhone = () => {
    history.push("/admin/phonelogin");
  };

  const handleGoogleLogin = async e => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result);
        const user = result.user;
        console.log(user);

        let creationTime = result.user.metadata.creationTime;
        let lastSignInTime = result.user.metadata.lastSignInTime;

        let isFirstUser;
        if (creationTime === lastSignInTime) {
          isFirstUser = true;
        } else {
          isFirstUser = false;
        }

        // console.log(creationTime === lastSignInTime);
        // console.log(typeof creationTime);
        // console.log(typeof lastSignInTime);

        verifyUserGoogleAuth(user.accessToken, isFirstUser, "google")
          .then(res => {
            console.log(res);
            authenticate(res.admin, user.accessToken, () => {
              setFormData({ ...formData, didRedirect: true });
            });
          })
          .catch(err => console.log(err));
      })
      .catch(error => {
        setFormData({ ...formData, error: error.message });
      });
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
      {performRedirect()}

      <div className="signup-section signup-section-dark">
        <div className="signup-parent">
          <div className="signup-child child2">
            <React.Fragment>
              <div className="signup-card signup-card-dark">
                <h1 className="signup-header-text signup-header-text-dark">
                  Admin Login
                </h1>
                <div className="inside-signup">
                  <div>
                    <button
                      className="submit-btn"
                      type="submit"
                      onClick={handleGoogleLogin}
                    >
                      Login with google
                    </button>
                  </div>
                  <div>
                    <button
                      className="submit-btn"
                      type="submit"
                      onClick={loginWithPhone}
                    >
                      Login with phone
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
