import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import style from "./style.module.scss";

const Header = () => {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);

	const handleLogout = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await AuthService.logout();
			navigate("/login");
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<header>
			<nav className={style.nav}>
				<ul className={style.nav__links}>
					<li className={style.link}>
						<NavLink to="/">logo</NavLink>
					</li>
				</ul>
				<ul className={style.nav__links}>
					<li className={style.link}>
						<NavLink to="/">home</NavLink>
					</li>
					<li className={style.link}>
						<NavLink to="/profile">profile</NavLink>
					</li>
				</ul>
				<ul className={style.nav__links}>
					<li className={`${style.link} btn btn--secondary`}>
						<NavLink to="/login">login</NavLink>
					</li>
					<li className={`${style.link} btn btn--primary`}>
						<NavLink to="/register">register</NavLink>
					</li>
					<li className={`${style.link} btn btn--secondary`}>
						<button onClick={handleLogout}>
							{isLoading ? (
								<FontAwesomeIcon icon={faCircleNotch} spin />
							) : (
								" logout"
							)}
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
