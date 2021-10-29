import { API } from "../../backend";

// console.log(API);
//get a event
export const getEvent = eventId => {
  return fetch(`${API}/event/${eventId}`, {
    method: "GET",
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

//get all events
export const getAllEvents = () => {
  return fetch(`${API}/events`, {
    method: "GET",
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

//create event
export const createEvent = (adminId, token, formData) => {
  return fetch(`${API}/event/create/${adminId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

//update a event
export const updateEvent = (eventId, adminId, token, formData) => {
  return fetch(`${API}/event/${eventId}/${adminId}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

//delete a event
export const deleteEvent = (adminId, eventId, token) => {
  return fetch(`${API}/event/${eventId}/${adminId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};
