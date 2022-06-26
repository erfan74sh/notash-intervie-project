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
				localStorage.setItem("seassion", JSON.stringify(session));
			}
			return response.data;
		})
		.catch((err) => console.error("errrr", err));
};

const AuthService = {
	register,
	login,
};

export default AuthService;
