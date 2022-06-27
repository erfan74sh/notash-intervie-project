import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Axios = axios.create({
	baseURL: BASE_URL,
	headers: authHeader(),
});

export default Axios;
