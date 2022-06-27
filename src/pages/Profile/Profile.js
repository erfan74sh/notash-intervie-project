import React, { useContext, useEffect, useState } from "react";
// context
import { authContext } from "../../Providers/AuthProvider";
// style
import style from "./style.module.scss";

const Profile = () => {
	const { user } = useContext(authContext);

	const [currentTime, setCurrentTime] = useState(
		new Date().toLocaleTimeString()
	);

	useEffect(() => {
		setInterval(() => setCurrentTime(new Date().toLocaleTimeString(), 1000));
	}, []);

	return (
		<div className="content">
			<section className={style.section}>
				<h2 className={style.section__title}>profile info</h2>
				<ul className={style.items}>
					<li className={style.items__item}>
						<span className={style.item__title}>username:</span>
						<span className={style.item__text}>{user.username}</span>
					</li>
					<li className={style.items__item}>
						<span className={style.item__title}>email:</span>
						<span className={style.item__text}>{user.email}</span>
					</li>
				</ul>
			</section>
			<section className={style.section}>
				<h2 className={style.section__title}>current time</h2>
				<span className={style.time}>{currentTime}</span>
			</section>
		</div>
	);
};

export default Profile;
