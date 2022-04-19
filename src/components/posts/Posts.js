import Post from "../post/Post";
import "./Posts.css";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p , id) => (
        <Post post={p} key={id} />
      ))}
    </div>
  );
}

export default Posts;
