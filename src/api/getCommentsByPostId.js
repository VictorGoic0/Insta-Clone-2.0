export default async function getCommentsByPostId(postId) {
	const endpoint = import.meta.env.VITE_BACKENDPOINT;

	try {
		const response = await fetch(`${endpoint}/api/posts/${[postId]}/comments`);
		return response.json();
	} catch (error) {
		throw new Error(`${error.message}. ${error.response.data.message}`);
	}
}
