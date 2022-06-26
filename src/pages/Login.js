import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const Login = () => {
	const [loginForm, setLoginForm] = useState({ email: "", password: "" });

	const { setUser } = useContext(authContext);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const session = await AuthService.login(loginForm);
			if (session && session.id) {
				const { account } = await UserService.getCurrentUser();
				const { username, email, created, updated } = account;
				console.log({ username, email, created, updated });
				setUser({ username, email, created, updated });
				navigate("/profile");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleFormChange = (e) => {
		setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
	};
	return (
		<div className="content">
			<h1>login page</h1>
			<form onSubmit={handleSubmit}>
				<label>email</label>
				<input
					type="email"
					name="email"
					value={loginForm.email}
					onChange={(e) => handleFormChange(e)}
				/>
				<label>password</label>
				<input
					type="password"
					name="password"
					value={loginForm.password}
					onChange={(e) => handleFormChange(e)}
				/>
				<button type="onSubmit">login</button>
			</form>
		</div>
	);
};

export default Login;
