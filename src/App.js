import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import PageLayout from "./routes/PageLayout";

import AuthProvider from "./Providers/AuthProvider";
// global style
import "./App.scss";
import useAuth from "./hooks/useAuth";

function App() {
	// useAuth custom hook watch in every route change and check if user is authorized or not
	useAuth();

	return (
		<AuthProvider>
			<Routes>
				<Route element={<PageLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/profile" element={<Profile />} />
					</Route>
				</Route>
			</Routes>
		</AuthProvider>
	);
}

export default App;
