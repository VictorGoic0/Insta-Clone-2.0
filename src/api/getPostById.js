export default async function getPostById(postId) {
	const endpoint = process.env.REACT_APP_BACKENDPOINT;

	try {
		const response = await fetch(`${endpoint}/api/posts/${postId}`);
		return response.json();
	} catch (error) {
		throw new Error(`${error.message}. ${error.response.data.message}`);
	}
}
