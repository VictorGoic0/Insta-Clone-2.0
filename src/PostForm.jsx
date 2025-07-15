import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import addPost from "./api/addPost"

export default function PostForm() {
  const [open, setOpen] = useState(false)
  const mutation = useMutation({
		mutationFn: function (e) {
			e.preventDefault();
			const formData = new FormData(e.target);
			const postInfo = {
				description: formData.get("description"),
				imageUrl: formData.get("password"),
        user_id: localStorage.getItem("userID")
			};
			return addPost(postInfo);
		},
	});

  
  return (
      <div className="postform">
        <form onSubmit={mutation.mutate}>
          {open ? (
            <>
              <textarea
                className="addpost area"
                placeholder="What's on your mind?"
                name="description"
              />
              <input
                placeholder="Image URL here"
                required
                name="imageUrl"
              />
              <button type="submit">Add Post</button>
            </>
          ) : (
            <input
              className="addpost"
              placeholder="Add a new post..."
              onClick={() => setOpen(true)}
            />
          )}
        </form>
      </div>
    );
}