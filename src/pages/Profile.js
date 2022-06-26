import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

const Profile = () => {
	const [user, setUser] = useState({
		username: "",
		email: "",
		created: "",
		updated: "",
	});
	useEffect(() => {
		(async () => {
			try {
				const response = await UserService.getCurrentUser();
				if (response.data && response.data.account) {
					const { username, email, created, updated } = response.data.account;
					setUser({ username, email, created, updated });
				}
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
	return (
		<div>
			<h1>profile page</h1>
			<div>
				<p>{user.username}</p>
				<p>{user.email}</p>
				<p>{user.created}</p>
				<p>{user.updated}</p>
			</div>
		</div>
	);
};

export default Profile;
