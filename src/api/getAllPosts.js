export default async function getAllPosts() {
	const endpoint = import.meta.env.VITE_BACKENDPOINT;

	try {
		const response = await fetch(`${endpoint}/api/posts`);
		return response.json();
	} catch (error) {
		throw new Error(`${error.message}. ${error.response.data.message}`);
	}
}
