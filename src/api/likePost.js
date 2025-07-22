export default async function likePost(postInfo) {
	const endpoint = import.meta.env.VITE_BACKENDPOINT;
	try {
		const response = await fetch(`${endpoint}/api/likes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(postInfo),
		});
		if (!response.ok) {
			console.log(response, "<--- not OK");
		}
		return response.json();
	} catch (error) {
		throw new Error(`${error.message}. ${error.response.data.message}`);
	}
}
