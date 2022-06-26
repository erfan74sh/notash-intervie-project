import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = () => {
	const session = JSON.parse(localStorage.getItem("session"));
	const user = JSON.parse(localStorage.getItem("user"));

	return session && user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
