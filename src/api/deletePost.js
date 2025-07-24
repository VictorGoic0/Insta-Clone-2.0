export default async function deletePost(postId) {
	const endpoint = import.meta.env.VITE_BACKENDPOINT;

	try {
		const response = await fetch(`${endpoint}/api/posts/${postId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				authorization: localStorage.getItem("token"),
			},
		});
		return response.json();
	} catch (error) {
		throw new Error(`${error.message}. ${error.response.data.message}`);
	}
}
