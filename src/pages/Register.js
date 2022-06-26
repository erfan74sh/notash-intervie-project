import React, { useState } from "react";
import AuthService from "../services/auth.service";

const Register = () => {
	const [user, setUser] = useState({ username: "", email: "", password: "" });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = await AuthService.register(user);
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleFormChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<h1>register page</h1>
			<form onSubmit={handleSubmit}>
				<label>username</label>
				<input
					type="text"
					name="username"
					value={user.username}
					onChange={(e) => handleFormChange(e)}
				/>
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

export default Register;
