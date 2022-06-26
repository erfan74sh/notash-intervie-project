import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = "https://api.m3o.com/v1/user/";

const Axios = axios.create({
	baseURL: BASE_URL,
	headers: authHeader(),
});

export default Axios;
