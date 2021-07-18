import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/index";
import { getAllCategories, createEvent } from "./adminapicalls";

//custom-toast
import makeToast from "../../components/utils/Toaster/Toaster";

//react-icons
import { RiUploadCloud2Line } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/all";
import { TiTick } from "react-icons/ti";

// import DatePickerUI from "../dashboard/utils/DataPicker";

const AddEvent = () => {
  const { admin, token } = isAuthenticated();
  // console.log(admin);
  const [values, setValues] = useState({
    name: "",
    info: "",
    startDate: "",
    endDate: "",
    image: "",
    linkedinURL: "",
    instagramURL: "",
    // categories: [],
    // category: "",
    loading: false,
    error: "",
    formData: "",
  });

  const {
    name,
    info,
    // date,
    startDate,
    endDate,
    image,
    linkedinURL,
    instagramURL,
    // categories,
    // category,
    loading,
    error,
    formData,
  } = values;

  // const preload = () => {
  //   getAllCategories().then(data => {
  //     console.log(data);
  //     if (data.error) {
  //       setValues({ ...values, error: data.error });
  //     } else {
  //       setValues({
  //         ...values,
  //         categories: data,
  //         formData: new FormData(),
  //       });
  //       // console.log(categories);
  //     }
  //   });
  // };

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  // console.log(image);

  const onSubmit = e => {
    e.preventDefault();
    setValues({
      ...values,
      error: "",
      loading: true,
    });
    console.log(formData);
    createEvent(admin._id, token, formData).then(data => {
      if (data.error) {
        // console.log("DATA : ", data);
        setValues({ ...values, error: data.error });
        makeToast("error", data.error);
      } else {
        setValues({
          ...values,
          name: "",
          info: "",
          startDate: "",
          endDate: "",
          image: "",
          linkedinURL: "",
          instagramURL: "",
          // loading: false,
        });
        makeToast("success", `Event created successfully!`);
      }
    });
  };

  const handleChange = name => e => {
    const value = name === "image" ? e.target.files[0] : e.target.value;

    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  // const successMessage = () =>
  //   makeToast("success", `${image} uploaded successfully!`);

  // const warningMessage = () => makeToast("error", `${error}`);

  // console.log(date);

  const createEventForm = () => (
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
          <textarea
            style={{ margin: "0px 0px 15px", width: "248px", height: "248px" }}
            onChange={handleChange("info")}
            type="text"
            className="form-control"
            placeholder="Event info"
            value={info}
          />
        </div>
        {/* <div className="form-group ">
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
        </div> */}
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
          <h4>Start Date</h4>
          <div className="form-group">
            <input
              className="form-control"
              onChange={handleChange("startDate")}
              type="date"
              required={true}
              value={startDate}
            />
          </div>
          <h4>End Date</h4>
          <div className="form-group">
            <input
              className="form-control"
              onChange={handleChange("endDate")}
              type="date"
              required={true}
              value={endDate}
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
          Create Event
        </button>
      </div>
    </form>
  );
  return (
    <>
      {/* {warningMessage()} */}

      <div className="row bg-secondary text-white rounded">
        <div className="col-md-8 offset-md-2">{createEventForm()}</div>
      </div>
    </>
  );
};

export default AddEvent;
