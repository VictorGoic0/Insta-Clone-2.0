export default async function signUp(userInfo) {
	const endpoint = process.env.REACT_APP_BACKENDPOINT;
	try {
		const response = await fetch(`${endpoint}/auth/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userInfo),
		});
		if (!response.ok) {
			console.log(response, "<--- not OK");
		}
		// set token and userId to localStorage
		// localStorage.setItem("token", response.data.token);
		// localStorage.setItem("userID", response.data.userID);
		console.log(response, "<--- response");
		return response.json();
	} catch (error) {
		throw new Error(`${error.message}. ${error.response.data.message}`);
	}
}
