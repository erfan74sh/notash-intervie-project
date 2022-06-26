import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

const Header = () => {
	const navigate = useNavigate();

	const handleLogout = async (e) => {
		e.preventDefault();
		try {
			await AuthService.logout();
			navigate("/login");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to="/">home</NavLink>
					</li>
					<li>
						<NavLink to="/profile">profile</NavLink>
					</li>
					<li>
						<NavLink to="/login">login</NavLink>
					</li>
					<li>
						<NavLink to="/register">register</NavLink>
					</li>
					<li>
						<button onClick={handleLogout}>log out</button>
					</li>
				</ul>
			</nav>
			<h1>home page</h1>
		</header>
	);
};

export default Header;
