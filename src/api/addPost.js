export default async function addPost(post) {
	const endpoint = process.env.REACT_APP_BACKENDPOINT;
	try {
		const response = await fetch(`${endpoint}/api/posts`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(post),
		});
		if (!response.ok) {
			console.log(response, "<--- not OK");
		}
		return response.json();
	} catch (error) {
		throw new Error(`${error.message}. ${error.response.data.message}`);
	}
}
