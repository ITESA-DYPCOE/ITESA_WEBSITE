import { API } from "../../backend";

export const verifyUserUsingToken = (token, authProvider) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token, authProvider: authProvider }),
  };
  return fetch(`${API}/authenticate`, requestOptions)
    .then(response => response.json())
    .catch(error => error);
};

export const verifyUserGoogleAuth = (token, isFirstUser, authProvider) => {
  console.log(isFirstUser);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: token,
      isFirstUser: isFirstUser,
      authProvider: authProvider,
    }),
  };
  return fetch(`${API}/authenticate`, requestOptions)
    .then(response => response.json())
    .catch(error => error);
};
