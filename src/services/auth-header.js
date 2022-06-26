const API_KEY = "YTFmNzYzY2UtMzk3OS00NjEwLTk3ZWMtM2EzZDliNWI3ZWU2";

const authHeader = () => {
	return {
		Authorization: `Bearer ${API_KEY}`,
	};
};

export default authHeader;
