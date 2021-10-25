import { API } from "../../../backend";
export const signup = user => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
};
export const signin = user => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};
//associated with signin method , which sets users token in users browser
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};
//in window obj, we are storing all the jwt token,etc.
//before actually hitting route, we clear token and then signout..
export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then(res => console.log("signout success!"))
      .catch(err => console.log(err));
  }
};
//to validate wheather user is signed in or not
export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
