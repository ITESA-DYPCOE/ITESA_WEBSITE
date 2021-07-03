import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updateCate, getCate } from "./adminapicalls";
import { isAuthenticated } from "../auth/helper/index";

//custom-toast
import makeToast from "../../components/utils/Toaster/Toaster";

//react-icons
import { IoArrowBackCircle } from "react-icons/all";

const UpdateCate = ({ match }) => {
  const { admin, token } = isAuthenticated();
  const [name, setName] = useState("");

  const preload = cateId => {
    getCate(cateId).then(data => {
      if (data.error) {
        return;
      } else {
        // preloadCategories();
        console.log(data);
        setName(data.name);
      }
    });
  };

  useEffect(() => {
    preload(match.params.cateId);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    updateCate(match.params.cateId, admin._id, token, { name }).then(data => {
      if (data.error) {
        makeToast("error", data.error);
      } else {
        makeToast("success", "Event Updated Successfully!");
        setName("");
      }
    });
  };

  const handleChange = name => e => {
    const value = e.target.value;
    console.log(name);
    console.log(value);
    setName(e.target.value);
  };

  const updateCateForm = () => (
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

        <div className="mini-container">
          <button
            type="submit"
            onClick={onSubmit}
            className="btn-outline-success"
          >
            Update Category
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <>
      <div>
        <div>{updateCateForm()}</div>
      </div>
    </>
  );
};
export default UpdateCate;
