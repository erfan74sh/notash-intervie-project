const API_KEY = process.env.REACT_APP_API_KEY;

const authHeader = () => {
	return {
		Authorization: `Bearer ${API_KEY}`,
	};
};

export default authHeader;
