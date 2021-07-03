import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/index";
import { getCate, getAllCategories, deleteCate } from "./adminapicalls";

import { IoArrowBackCircle } from "react-icons/all";
import makeToast from "../../components/utils/Toaster/Toaster";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { admin, token } = isAuthenticated();

  const preload = () => {
    getAllCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const removeCate = cateId => {
    deleteCate(admin._id, cateId, token)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          makeToast("success", "Removed Successfully!");
          preload();
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(to right, #ffdd77 0%, #ffdf7e 94%)",
      }}
    >
      <h1
        style={{
          color: "#FF7F07",
          fontFamily: "Nunito",
          borderBottom: "2px solid #fff",
        }}
      >
        All Our Lovely Event Categories
      </h1>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <span>
            <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
              <h1 className="admin-home-btn" style={{ margin: "0px" }}>
                <IoArrowBackCircle />
              </h1>
            </Link>
          </span>
          <h2>
            Total
            <span style={{ color: "#FF4D50", padding: "0em 0.5em" }}>
              {categories.length}
            </span>
            categories
          </h2>
          {categories &&
            categories.map(category => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // flexDirection: "column",
                      padding: "35px",
                    }}
                  >
                    <div style={{ padding: "20px" }}>
                      <h3
                        style={{
                          color: "#FF4D50",
                          fontFamily: "Nunito",
                          fontSize: "1.2rem",
                        }}
                      >
                        {category.name}
                      </h3>
                    </div>
                    {/* <div className="col-4">
              <Link
                className="btn btn-success"
                to={`/admin/product/update/productId`}
              >
                <span className="">Update</span>
              </Link>
            </div> */}
                    <div>
                      <Link to={`/admin/update/category/${category._id}`}>
                        <button className="btn-outline-success">Update</button>
                      </Link>
                    </div>
                    <div>
                      <button
                        onClick={() => removeCate(category._id)}
                        className="btn-outline-success"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
