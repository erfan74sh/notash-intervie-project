import React, { createContext, useState } from "react";

const initialState = {
	user: JSON.parse(localStorage.getItem("user")) || {},
	setUser: () => {},
};

export const authContext = createContext(initialState);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
	const userHandler = (user) => {
		setUser(user);
	};
	return (
		<authContext.Provider value={{ user: user, setUser: userHandler }}>
			{children}
		</authContext.Provider>
	);
};

export default AuthProvider;
