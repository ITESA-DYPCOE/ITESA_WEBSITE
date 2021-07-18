// import React, { useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { isAuthenticated } from "../auth/helper/index";
// import { createCategory } from "./adminapicalls";

// //custom-toast
// import makeToast from "../../components/utils/Toaster/Toaster";

// //react-icons
// import { RiUploadCloud2Line } from "react-icons/ri";
// import { IoArrowBackCircle } from "react-icons/all";
// import { TiTick } from "react-icons/ti";

// const AddCategory = () => {
//   const { admin, token } = isAuthenticated();
//   // console.log(admin);
//   const [name, setName] = useState("");

//   // const onSubmit = e => {
//   //   e.preventDefault();
//   //   // setValues({ ...values, error: "", loading: true });
//   //   // const obj = {
//   //   //   name: category,
//   //   // };
//   //   createCategory(admin._id, token, { name }).then(data => {
//   //     if (data.error) {
//   //       // console.log("DATA : ", data);
//   //       // setValues({ ...values, error: data.error });
//   //       makeToast("error", data.error);
//   //     } else {
//   //       setName("");
//   //       makeToast("success", `Category created successfully!`);
//   //     }
//   //   });
//   // };

//   const onSubmit = e => {
//     e.preventDefault();
//     //backend req fired!
//     createCategory(admin._id, token, { name }).then(data => {
//       if (data.error) {
//         makeToast("error", data.error);
//       } else {
//         setName("");
//         makeToast("success", `Category created successfully!`);
//       }
//     });
//   };

//   const handleChange = e => {
//     setName(e.target.value);
//   };

//   // const successMessage = () =>
//   //   makeToast("success", `${image} uploaded successfully!`);

//   // const warningMessage = () => makeToast("error", `${error}`);
//   const createCategoryForm = () => (
//     <form className="form-category-container">
//       <div className="mini-container">
//         <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
//           <h1 className="admin-home-btn">
//             <IoArrowBackCircle />
//           </h1>
//         </Link>
//       </div>
//       <div className="centered-container">
//         <div className="form-group ">
//           <input
//             onChange={handleChange}
//             type="text"
//             className="form-control"
//             placeholder="Event Category Name"
//             value={name}
//           />
//         </div>

//         <button
//           type="submit"
//           onClick={onSubmit}
//           className="btn-outline-success"
//         >
//           Create Category
//         </button>
//       </div>
//     </form>
//   );
//   return (
//     <>
//       {/* {warningMessage()} */}

//       <div className="row bg-secondary text-white rounded">
//         <div className="col-md-8 offset-md-2">{createCategoryForm()}</div>
//       </div>
//     </>
//   );
// };

// export default AddCategory;
