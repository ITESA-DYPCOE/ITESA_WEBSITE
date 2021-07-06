import { API } from "../../backend";

//get event photo
export const getPhoto = eventId => {
  return fetch(`${API}/event/image/${eventId}`, {
    method: "GET",
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

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

//get a cate
export const getCate = cateId => {
  return fetch(`${API}/category/${cateId}`, {
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

export const getAllLatestEvents = () => {
  return fetch(`${API}/latest/events`, {
    method: "GET",
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

export const getAllPastEvents = () => {
  return fetch(`${API}/past/events`, {
    method: "GET",
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

//get all categories
export const getAllCategories = () => {
  return fetch(`${API}/categories`, {
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

//create category
export const createCategory = (adminId, token, category) => {
  return fetch(`${API}/category/create/${adminId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

//update a event
export const updateEvent = (eventId, adminId, token, event) => {
  return fetch(`${API}/event/${eventId}/${adminId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: event,
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

//update a cate
export const updateCate = (cateId, adminId, token, category) => {
  return fetch(`${API}/category/${cateId}/${adminId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
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

//delete a cate
export const deleteCate = (adminId, cateId, token) => {
  return fetch(`${API}/category/${cateId}/${adminId}`, {
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
