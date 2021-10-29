/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/config";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/index";
import { createEvent } from "./adminapicalls";
//react-toast
import { toast } from "material-react-toastify";
//react-icons
import { RiUploadCloud2Line } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/all";
import { TiTick } from "react-icons/ti";

const AddEvent = () => {
  const { adminId, token } = isAuthenticated();
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [values, setValues] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    imageURL: "",
    linkedinURL: "",
    instagramURL: "",
    loading: false,
    error: "",
    // formData: "",
  });

  const {
    title,
    imageURL,
    startDate,
    endDate,
    description,
    linkedinURL,
    instagramURL,
    // formData,
  } = values;

  function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }

  const onSubmit = e => {
    e.preventDefault();
    setValues({
      ...values,
      error: "",
      loading: true,
      // formData: new FormData(),
    });

    const eventData = {
      title,
      description,
      startDate,
      endDate,
      imageURL,
      linkedinURL,
      instagramURL,
    };
    // console.log(eventData);

    const formData = getFormData(eventData);
    console.log(formData);

    createEvent(adminId, token, formData).then(data => {
      console.log(data);
      if (data.msg) {
        setValues({ ...values, error: data.error });
        toast.error(data.msg);
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          startDate: "",
          endDate: "",
          imageURL: "",
          linkedinURL: "",
          instagramURL: "",
        });
        toast.success(`Event created successfully!`);
      }
    });
  };

  const imagePicker = async e => {
    try {
      let id = new Date().toISOString();
      const storageRef = ref(storage, "images/" + id);
      console.log(e.target.files[0]);
      console.log(id);

      const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        error => {
          console.log("error vroo!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            setDownloadUrl(downloadURL);
            console.log("File available at", downloadURL);
            setValues({ ...values, imageURL: downloadURL });
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };

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
            onChange={handleChange("title")}
            name="title"
            className="form-control"
            placeholder="Event name"
            value={title}
          />
        </div>

        <div className="form-group ">
          <textarea
            style={{ margin: "0px 0px 15px", width: "248px", height: "248px" }}
            onChange={handleChange("description")}
            type="text"
            className="form-control"
            placeholder="Event description"
            value={description}
          />
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
                type="file"
                name="imageURL"
                accept="image/*"
                multiple={false}
                onChange={e => imagePicker(e)}
              />

              {imageURL ? (
                <>
                  <span style={{ fontSize: "0.75rem" }}>
                    Image uploaded successfully!
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
      <div className="row bg-secondary text-white rounded">
        <div className="col-md-8 offset-md-2">{createEventForm()}</div>
      </div>
    </>
  );
};

export default AddEvent;
