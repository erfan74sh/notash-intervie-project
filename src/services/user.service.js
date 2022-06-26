import Axios from "./Axios";

const getCurrentUser = () => {
	const { userId } = JSON.parse(localStorage.getItem("session"));
	console.log(userId);
	return Axios.post("Read", { id: userId });
};

const UserService = {
	getCurrentUser,
};

export default UserService;
