import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { authContext } from "../../Providers/AuthProvider";
// services
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";
// components
import TextInput from "../../components/Inputs/TextInput";
// icons
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
	const navigate = useNavigate();

	const { setUser } = useContext(authContext);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (values) => {
		setIsLoading(true);
		try {
			const session = await AuthService.login(values);
			if (session && session.id) {
				const { account } = await UserService.getCurrentUser();
				const { username, email, created, updated } = account;
				setUser({ username, email, created, updated });
				navigate("/profile");
			}
		} catch (err) {
			setError(err.response.data.detail);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="content">
			<h1>Login Page</h1>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={yup.object({
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
						<TextInput type="email" name="email" label="email" />
						<TextInput type="password" name="password" label="password" />
					</fieldset>
					<button type="onSubmit" className="btn btn--primary">
						{isLoading ? (
							<FontAwesomeIcon icon={faCircleNotch} spin />
						) : (
							" login"
						)}
					</button>
				</Form>
			</Formik>
			{error && <div className="status status--error">{error}</div>}
		</div>
	);
};

export default Login;
