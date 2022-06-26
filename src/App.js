import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";

import "./App.scss";
import AuthProvider from "./Providers/AuthProvider";
import PageLayout from "./routes/PageLayout";

function App() {
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
