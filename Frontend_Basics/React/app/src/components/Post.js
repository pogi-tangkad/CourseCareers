import "./post.css";

export default function Post({ title, author, content, following }) {
  const button = following ? (
    <button className="card">Unfollow</button>
  ) : (
    <button className="card">Follow</button>
  );
  return (
    <div className="card">
      <h1>{title}</h1>
      <h3>By: {author}</h3>
      {button}
      {following && <p>{content}</p>}
    </div>
  );
}
