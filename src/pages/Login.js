import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Login = () => {
	const [user, setUser] = useState({ email: "", password: "" });

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const session = await AuthService.login(user);
			if (session && session.id) {
				navigate("/profile");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleFormChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	return (
		<div>
			<h1>login page</h1>
			<form onSubmit={handleSubmit}>
				<label>email</label>
				<input
					type="email"
					name="email"
					value={user.email}
					onChange={(e) => handleFormChange(e)}
				/>
				<label>password</label>
				<input
					type="password"
					name="password"
					value={user.password}
					onChange={(e) => handleFormChange(e)}
				/>
				<button type="onSubmit">register</button>
			</form>
		</div>
	);
};

export default Login;
