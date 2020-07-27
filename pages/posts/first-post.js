import Link from "next/link";

const FirstPost = () => (
  <div className="post-container">
    <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </h2>
  </div>
);

export default FirstPost;
