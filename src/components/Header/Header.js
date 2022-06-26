import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { authContext } from "../../Providers/AuthProvider";
// services
import AuthService from "../../services/auth.service";
// icons
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
// styles
import style from "./style.module.scss";

const Header = () => {
	const navigate = useNavigate();

	const { user, setUser } = useContext(authContext);

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
			setUser({});
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
					{user.email ? (
						<>
							<li>{`welcome ${user.username}`}</li>
							<li className={`${style.link} btn btn--secondary`}>
								<button onClick={handleLogout}>
									{isLoading ? (
										<FontAwesomeIcon icon={faCircleNotch} spin />
									) : (
										" logout"
									)}
								</button>
							</li>
						</>
					) : (
						<>
							<li className={`${style.link} btn btn--secondary`}>
								<NavLink to="/login">login</NavLink>
							</li>
							<li className={`${style.link} btn btn--primary`}>
								<NavLink to="/register">register</NavLink>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
