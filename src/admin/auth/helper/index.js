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

export const authenticate = (data, token, next) => {
  if (typeof window !== "undefined") {
    data.token = token;
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    next();
  }
};

export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
    next();
    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then(res => console.log("signout success!"))
      .catch(err => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};
