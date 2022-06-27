import Axios from "./Axios";

const getCurrentUser = () => {
	const { userId } = JSON.parse(localStorage.getItem("session"));
	return Axios.post("Read", { id: userId }).then((response) => {
		const { username, email, created, updated } = response.data.account;
		localStorage.setItem(
			"user",
			JSON.stringify({ username, email, created, updated })
		);
		return response.data;
	});
};

const UserService = {
	getCurrentUser,
};

export default UserService;
