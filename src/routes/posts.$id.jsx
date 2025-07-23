import { createFileRoute, useLocation } from '@tanstack/react-router'
import moment from "moment";
import "../CSS/PostContainer.css";
import SearchBar from "../SearchBar";
import CommentSection from "../CommentSection";
import { Trash2 } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import getPostById from '../api/getPostById';
import { CurrentUserContext } from '../contexts';
import { useContext } from 'react';

export const Route = createFileRoute('/posts/$id')({
  component: PostPageComponent,
})

function PostPageComponent() {
  const { id } = Route.useParams();
  const location = useLocation();
  const [ currentUser ] = useContext(CurrentUserContext);

  const { isLoading, data: post } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostById(id),
    staleTime: 30000
  })

  const likePost = () => {
    console.log("like fired")
  }

  if (isLoading || id === undefined) {
    return (
      <>
        <SearchBar />
        <div className="loading">
          <p>Loading...</p>
        </div>
      </>
    );
  } else if (!isLoading && post) {
    const {
    thumbnailUrl,
    username,
    imageUrl,
    likes,
    comments,
    createdAt,
    user_id,
    description
  } = post;
    return (
      <>
        <SearchBar />
        <div className="post-page-container">
          <div className="post-image">
            <img src={imageUrl} alt="post" />
          </div>
          <div className="post">
            <div className="post-header">
              <img
                className="thumbnail"
                src={thumbnailUrl}
                alt="profile thumbnail"
              />
              <h2>{username}</h2>
              {currentUser && currentUser.userID === user_id ? (
                <Trash2 size={18} color="#000" />
              ) : null}
            </div>
            {description && description.length ? (
              <p className="description">{description}</p>
            ) : null}
            {<p className="timestamp">{moment(createdAt).fromNow()}</p>}
            <div className="post-footer">
              <img
                src="https://img.icons8.com/windows/32/000000/like.png"
                alt="heart"
                className="logo"
                onClick={likePost}
              />
              <img
                src="https://img.icons8.com/windows/32/000000/speech-bubble.png"
                alt="comment"
                className="logo"
              />
              <h3>{likes} likes</h3>
              <CommentSection
                post_id={id}
                comments={comments}
                path={location.pathname}
                currentUser={currentUser}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  
}