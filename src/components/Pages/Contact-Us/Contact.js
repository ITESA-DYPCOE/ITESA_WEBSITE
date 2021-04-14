import React, { useState } from "react";

//reactstrap
import { Button } from "reactstrap";
import "./Contact.css";

//img
import img from "./assets/contact-us-img.jpg";

//joi-browser for form-validations
import Joi from "joi-browser";

//react-toast
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [formerrors, setFormErrors] = useState({});
	const [submited, setSubmited] = useState(false);

	const schema = {
		name: Joi.string().trim().required().min(3).label("Name"),
		email: Joi.string().trim().email().required().label("Email"),
		subject: Joi.string().trim().required().min(5).label("Subject"),
		message: Joi.string().trim().required().min(8).label("Message"),
	};

	const validate = () => {
		const result = Joi.validate(formData, schema, { abortEarly: false });
		if (!result.error) return null;
		const errors = {};
		for (let item of result.error.details) {
			errors[item.path[0]] = item.message;
		}
		return errors;
	};

	const validateProperty = input => {
		const { name, value } = input;
		const obj = { [name]: value };
		const obj_schema = { [name]: schema[name] };
		const result = Joi.validate(obj, obj_schema);
		return result.error ? result.error.details[0].message : null;
	};

	const handleChange = e => {
		const { currentTarget: input } = e;
		const errors = { ...formerrors };
		const errorMessage = validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...formData };
		data[input.name] = input.value;
		setFormData({ ...data, [input.name]: input.value });
		setFormErrors(errors);
	};

	const URL = process.env.REACT_APP_BACKEND_URL

	const fetchApi = async () => {
		const { name, email, subject, message } = formData;

		const res = await fetch(`${URL}/submit-query`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				subject,
				message,
			}),
		});

		const data = await res.json();
		if (!data) {
			toast.error("Gotcha Error!");
		} else {
			toast.warning("Recieved your valuable message 😄");
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const errors = validate();
		Object.keys(formData).map(key => {
			if (formData[key] === "" || formData[key] === null) {
				errors[key] = `${key} is required`;
			}
			return 0;
		});
		if (errors !== 0) {
			setFormErrors(errors);
		}
		if (errors) {
			setSubmited(false);
		} else {
			setSubmited(true);
			fetchApi();
			setFormData("");
		}
	};

	return (
		<>
			<div className="toast">
				<ToastContainer position="bottom-center" />
			</div>
			<div className="contact-section contact-section-dark">
				<div className="contact-parent">
					<div className="contact-child child1">
						<img src={img} alt="" className="contact-image" />
					</div>
					<div className="contact-child child2">
						{submited ? (
							<React.Fragment>
								<div className="goodbye-card">
									<h1 className="card-heading">Hello There !</h1>
									<div className="inside-card">
										<p
											style={{
												textAlign: "center",
											}}
										>
											We have heard you! 🤩 <br />
											We will get back to you very soon if required!
										</p>
									</div>
								</div>
							</React.Fragment>
						) : (
							<React.Fragment>
								<div className="contact-card contact-card-dark">
									<h1 className="contact-header-text contact-header-text-dark">
										Get In Touch
									</h1>
									<div className="inside-contact">
										<form onSubmit={handleSubmit}>
											<div className="contact-input contact-input-dark">
												<input
													autoFocus="on"
													autoComplete="off"
													name="name"
													id="txt_name"
													type="text"
													placeholder="Your Name"
													onChange={handleChange}
												/>
												<i className="fas fa-user"></i>
												{formerrors["name"] && (
													<div className="validation">
														* {formerrors["name"]}
													</div>
												)}
											</div>
											<div className="contact-input contact-input-dark">
												<input
													name="email"
													autoComplete="off"
													id="txt_email"
													type="text"
													placeholder="Your Email"
													onChange={handleChange}
												/>
												<i className="fas fa-envelope-open-text"></i>
												{formerrors["email"] && (
													<div className="validation">
														* {formerrors["email"]}
													</div>
												)}
											</div>
											<div className="contact-input contact-input-dark">
												<input
													autoComplete="off"
													name="subject"
													id="txt_subject"
													type="text"
													placeholder="Your Subject"
													onChange={handleChange}
												/>
												<i className="fas fa-pencil-alt"></i>
												{formerrors["subject"] && (
													<div className="validation">
														* {formerrors["subject"]}
													</div>
												)}
											</div>
											<div className="contact-input contact-input-dark">
												<textarea
													autoComplete="off"
													name="message"
													id="txt_message"
													rows="4"
													cols="20"
													placeholder="Your Message"
													onChange={handleChange}
												></textarea>
												<i className="fas fa-comment-dots"></i>
												{formerrors["message"] && (
													<div className="validation">
														* {formerrors["message"]}
													</div>
												)}
											</div>
											<div>
												<Button className="submit-btn" type="submit">
													Let's Talk!
												</Button>
											</div>
										</form>
									</div>
								</div>
							</React.Fragment>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
