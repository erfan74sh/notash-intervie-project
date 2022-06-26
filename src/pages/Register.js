import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// services
import AuthService from "../services/auth.service";
// components
import TextInput from "../components/Inputs/TextInput";
// icons
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (values) => {
		setIsLoading(true);
		try {
			await AuthService.register(values);
			navigate("/login");
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="content">
			<h1>register page</h1>
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
					<TextInput type="text" name="username" label="username" />
					<TextInput type="email" name="email" label="email" />
					<TextInput type="password" name="password" label="password" />
					<button type="onSubmit">
						{isLoading ? (
							<FontAwesomeIcon icon={faCircleNotch} spin />
						) : (
							" register"
						)}
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Register;
