export default async function editPost(post) {
	const endpoint = import.meta.env.VITE_BACKENDPOINT;
	try {
		const response = await fetch(`${endpoint}/api/posts/${post.id}`, {
			method: "PUT",
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
