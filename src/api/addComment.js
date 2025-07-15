export default async function addComment(comment) {
	const endpoint = process.env.REACT_APP_BACKENDPOINT;
	try {
		const response = await fetch(
			`${endpoint}/api/posts/${comment.post_id}/comments`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(comment),
			},
		);
		if (!response.ok) {
			console.log(response, "<--- not OK");
		}
		return response.json();
	} catch (error) {
		throw new Error(`${error.message}. ${error.response.data.message}`);
	}
}
