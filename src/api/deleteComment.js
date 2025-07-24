export default async function deleteComment(postId, commentId) {
	const endpoint = import.meta.env.VITE_BACKENDPOINT;

	try {
		const response = await fetch(
			`${endpoint}/api/posts/${postId}/comments/${commentId}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: localStorage.getItem("token"),
				},
			},
		);
		return response.json();
	} catch (error) {
		throw new Error(`${error.message}. ${error.response.data.message}`);
	}
}
