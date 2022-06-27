import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// services
import AuthService from "../../services/auth.service";
// components
import TextInput from "../../components/Inputs/TextInput";
// icons
import {
	faCircleCheck,
	faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [successful, setSuccessful] = useState(false);

	const handleSubmit = async (values) => {
		setIsLoading(true);
		try {
			await AuthService.register(values);
			setSuccessful(true);
			setError("");
			setTimeout(() => navigate("/login"), 1500);
		} catch (err) {
			setSuccessful(false);
			setError(err.response.data.detail);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="content">
			<h1>Register Page</h1>
			{!successful && (
				<Formik
					initialValues={{ username: "", email: "", password: "" }}
					validationSchema={yup.object({
						username: yup
							.string()
							.max(20, "must be 20 characters or less")
							.required("required"),
						email: yup.string().email().required("required"),
						password: yup
							.string()
							.min(8, "most be 8 characters or more")
							.required("required"),
					})}
					onSubmit={handleSubmit}
				>
					<Form>
						<fieldset>
							<TextInput type="text" name="username" label="username" />
							<TextInput type="email" name="email" label="email" />
							<TextInput type="password" name="password" label="password" />
						</fieldset>
						<button type="onSubmit" className="btn btn--primary">
							{isLoading ? (
								<FontAwesomeIcon icon={faCircleNotch} spin />
							) : (
								" register"
							)}
						</button>
					</Form>
				</Formik>
			)}
			{(successful || error) && (
				<div
					className={`status ${
						successful ? "status--successful" : "status--error"
					}`}
				>
					{successful ? (
						<>
							<span className="status__icon">
								<FontAwesomeIcon icon={faCircleCheck} />
							</span>
							<span>You registerd successfully!</span>
						</>
					) : (
						error
					)}
				</div>
			)}
		</div>
	);
};

export default Register;
