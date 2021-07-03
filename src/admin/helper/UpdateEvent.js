import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAllCategories,
  getEvent,
  updateEvent,
  getPhoto,
} from "./adminapicalls";
import { isAuthenticated } from "../auth/helper/index";
import moment from "moment";

//custom-toast
import makeToast from "../../components/utils/Toaster/Toaster";

//react-icons
import { RiUploadCloud2Line } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/all";
import { TiTick } from "react-icons/ti";

const UpdateEvent = ({ match }) => {
  const { admin, token } = isAuthenticated();
  const [CATE, setCATE] = useState("");
  const [values, setValues] = useState({
    name: "",
    info: "",
    date: "",
    image: "",
    linkedinURL: "",
    instagramURL: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    formData: "",
  });

  const {
    name,
    info,
    date,
    image,
    linkedinURL,
    instagramURL,
    categories,
    category,
    loading,
    error,
    formData,
  } = values;

  const preload = eventId => {
    getEvent(eventId).then(data => {
      console.log(data.date);
      let DATE = moment(data.date).format("YYYY-MM-DD");
      // console.log(DATE);
      setCATE(data.category.name);
      // console.log(CATE);

      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCategories();

        // console.log(
        //   <Moment format="DD-MM-YYYY">2021-07-21T00:00:00.000Z</Moment>
        // );
        console.log(data);
        setValues({
          ...values,
          name: "",
          info: data.info,
          date: DATE,
          // image: data.image,
          linkedinURL: data.linkedinURL,
          instagramURL: data.instagramURL,
          name: data.name,
          category: data.category._id,
          formData: new FormData(),
        });
      }
    });
  };

  const preloadImage = eventId => {
    getPhoto(eventId).then(data => {
      console.log(eventId);
      // if (data.error) {
      //   return makeToast("error", data.error);
      // }
      console.log(data);
      setValues({ ...values, image: data });
    });
  };

  const preloadCategories = () => {
    getAllCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    preload(match.params.eventId);
    // preloadImage(match.params.eventId);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateEvent(match.params.eventId, admin._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        makeToast("error", data.error);
      } else {
        makeToast("success", "Event Updated Successfully!");
        setValues({
          ...values,
          name: "",
          info: "",
          date: "",
          image: "",
          linkedinURL: "",
          instagramURL: "",
        });
        setCATE("");
      }
    });
  };

  const handleChange = name => event => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const updateEventForm = () => (
    <form className="form-container">
      <div className="mini-container">
        <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
          <h1 className="admin-home-btn">
            <IoArrowBackCircle />
          </h1>
        </Link>
      </div>
      <div className="mini-container">
        <div className="form-group " style={{ marginTop: "15px" }}>
          <input
            type="text"
            onChange={handleChange("name")}
            name="name"
            className="form-control"
            placeholder="Event name"
            value={name}
          />
        </div>

        <div className="form-group ">
          <input
            onChange={handleChange("info")}
            type="text"
            className="form-control"
            placeholder="Event info"
            value={info}
          />
        </div>
        <div
          className="form-group"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h5 style={{ marginBottom: "1em" }}>
            Previously Selected Category :
            <span
              style={{ color: "#FF4D50", fontSize: "1.5em", padding: "0.5em" }}
            >
              {CATE}
            </span>
          </h5>
          <select
            onChange={handleChange("category")}
            className="form-control"
            placeholder="Category"
          >
            <option>Select</option>
            {categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="centered-container">
        <span
          className="lead"
          style={{
            fontSize: "1.4rem",
            padding: "30px",
            margin: "35px",
            textAlign: "center",
          }}
        >
          Upload photo
          <div className="form-group">
            <label className="upload-file-input">
              <input
                style={{
                  visibility: "hidden",
                  width: "0px",
                }}
                onChange={handleChange("image")}
                type="file"
                name="image"
                accept="image"
              />
              {image ? (
                <>
                  <span style={{ fontSize: "0.75rem" }}>
                    `{image.name} --image uploaded!`
                  </span>
                  <TiTick
                    className="upload-icon"
                    style={{ marginBottom: "-8px", color: "#1ccf1c" }}
                  />
                </>
              ) : (
                <span>
                  <RiUploadCloud2Line className="upload-icon" />
                </span>
              )}
            </label>
          </div>
        </span>
        <div className="mini-container">
          <div className="form-group">
            <input
              className="form-control"
              onChange={handleChange("date")}
              type="date"
              required={true}
              value={date}
            />
          </div>
        </div>
      </div>

      <div className="mini-container">
        <div className="form-group ">
          <input
            onChange={handleChange("linkedinURL")}
            type="text"
            className="form-control"
            placeholder="Event LinkedIn URL"
            value={linkedinURL}
          />
        </div>
        <div className="form-group ">
          <input
            onChange={handleChange("instagramURL")}
            type="text"
            className="form-control"
            placeholder="Event Instagram URL"
            value={instagramURL}
          />
        </div>
        <button
          type="submit"
          onClick={onSubmit}
          className="btn-outline-success"
        >
          Update Event
        </button>
      </div>
    </form>
  );

  return (
    <>
      <div>
        <div>{updateEventForm()}</div>
      </div>
    </>
  );
};
export default UpdateEvent;
