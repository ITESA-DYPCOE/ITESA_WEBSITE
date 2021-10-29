import { useEffect, useState } from "react";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  auth,
} from "../../../firebase/config";
import { Redirect } from "react-router-dom";
import { authenticate, isAuthenticated } from "../helper";
import { verifyUserUsingToken } from "../../helper/authapicalls";

const LoginWithPhone = () => {
  const admin = isAuthenticated();
  console.log(admin);

  const [phoneNumber, setPhoneNumber] = useState();
  const [code, setCode] = useState();
  const [confirmResult, setConfirmResult] = useState();
  const [didRedirect, setDidRedirect] = useState(false);

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
  }, []);

  const loginWithCode = () => {
    if (code.length !== 6) {
      console.log("Invalid code");
      return;
    }
    confirmResult
      .confirm(code)
      .then(result => {
        console.log(result);
        const { accessToken } = result.user;
        verifyUserUsingToken(accessToken, "phone")
          .then(res => {
            console.log(res);
            authenticate(res.admin, () => {
              setDidRedirect(true);
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(error => {
        console.log("err!!");
      });
  };

  const onClickLogin = () => {
    if (phoneNumber.length !== 10) {
      return console.log("Invalid Phone Number!");
    }
    let phone = `+91${phoneNumber}`;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phone, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        setConfirmResult(confirmationResult);
        console.log("Code sent SUCCESS");
        // console.log(confirmationResult);
      })
      .catch(error => {
        console.log("Code not sent");
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
    <div>
      {performRedirect()}
      {confirmResult ? (
        <>
          <input
            type="number"
            placeholder="enter OTP here"
            name="code"
            onChange={e => setCode(e.target.value)}
          />
          <button onClick={loginWithCode}>{"Verify OTP & Login"}</button>
        </>
      ) : (
        <>
          <label htmlFor="phone">+91</label>
          <input
            type="tel"
            placeholder="Phone number"
            name="phoneNumber"
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <button onClick={onClickLogin}>Login with Phone</button>
        </>
      )}
      <center>
        <div id="recaptcha-container"></div>
      </center>
    </div>
  );
};

export default LoginWithPhone;
