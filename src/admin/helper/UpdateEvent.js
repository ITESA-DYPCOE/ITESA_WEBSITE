/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  // deleteObject,
} from "firebase/storage";
import { storage } from "../../firebase/config";
import { Link, useParams } from "react-router-dom";
import { RiUploadCloud2Line } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/all";
import { TiTick } from "react-icons/ti";
import { toast } from "material-react-toastify";
import { isAuthenticated } from "../auth/helper/index";
import { getEvent, updateEvent } from "./adminapicalls";

const UpdateEvent = ({ match }) => {
  const { eventId } = useParams();

  const { adminId, token } = isAuthenticated();
  const [values, setValues] = useState({
    description: "",
    title: "",
    startDate: "",
    endDate: "",
    imageURLURL: "",
    linkedinURL: "",
    instagramURL: "",
    loading: false,
    error: "",
    formData: "",
  });

  const {
    description,
    title,
    startDate,
    endDate,
    imageURL,
    linkedinURL,
    instagramURL,
    formData,
  } = values;

  const preload = eventId => {
    getEvent(eventId).then(data => {
      if (data.msg) {
        setValues({ ...values, error: data.msg });
      } else {
        // console.log(data);
        let START_DATE = new Date(data.date.startDate)
          .toISOString()
          .slice(0, 10);
        let END_DATE = new Date(data.date.endDate).toISOString().slice(0, 10);

        const { instagram, linkedin } = data.links;
        // console.log(data.imageURL);
        setValues({
          ...values,
          title: data.title,
          imageURL: data.imageURL,
          startDate: START_DATE,
          endDate: END_DATE,
          linkedinURL: linkedin,
          instagramURL: instagram,
          description: data.description,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    preload(eventId);
  }, []);

  function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }

  const onSubmit = e => {
    e.preventDefault();
    setValues({ ...values, error: "", loading: true });

    const eventData = {
      title,
      description,
      startDate,
      endDate,
      imageURL,
      linkedinURL,
      instagramURL,
    };

    const formData = getFormData(eventData);

    updateEvent(eventId, adminId, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        toast.error("error", data.error);
      } else {
        toast.success("Event Updated Successfully!");
        setValues({
          ...values,
          description: "",
          title: "",
          startDate: "",
          endDate: "",
          imageURL: "",
          linkedinURL: "",
          instagramURL: "",
        });
      }
    });
  };

  const imagePicker = async e => {
    try {
      let id = new Date().toISOString();
      const storageRef = ref(storage, "images/" + id);
      console.log(storageRef);
      //   deleteObject(storageRef).then(() => {
      //      // File deleted successfully
      //   }).catch((error) => {
      //   // Uh-oh, an error occurred!
      // });

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
            // console.log("File available at", downloadURL);
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
            onChange={handleChange("title")}
            name="title"
            className="form-control"
            placeholder="Event title"
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
                    `{imageURL.name} --imageURL uploaded!`
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
