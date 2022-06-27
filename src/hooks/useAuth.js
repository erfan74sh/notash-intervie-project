import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const useAuth = () => {
	let location = useLocation();

	const { setUser } = useContext(authContext);

	const [path, setPath] = useState(location);

	useEffect(() => {
		setPath(location);
		const user = localStorage.getItem("user");
		const session = localStorage.getItem("session");
		// check if user or session in localStorage is deleted
		// reset user in context
		if (!user || !session) {
			setUser({});
		}
	}, [location, setUser]);

	return path;
};

export default useAuth;
