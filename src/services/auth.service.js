import Axios from "./Axios";

const register = ({ email, password, username }) => {
	return Axios.post("Create", {
		email,
		password,
		username,
	});
};

const login = ({ email, password }) => {
	return Axios.post("Login", { email, password })
		.then((response) => {
			const session = response.data?.session;
			if (session && session.id) {
				localStorage.setItem("session", JSON.stringify(session));
			}
			return session;
		})
		.catch((err) => console.error("errrr", err));
};

const logout = () => {
	const { id } = JSON.parse(localStorage.getItem("session"));
	return Axios.post("Logout", { sessionId: id })
		.then((response) => {
			localStorage.removeItem("session");
			return response.data;
		})
		.catch((err) => console.log(err));
};

const AuthService = {
	register,
	login,
	logout,
};

export default AuthService;
