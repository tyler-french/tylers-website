import React, { useEffect, useState } from "react";
import "./BlogPostDirectory.css";
import ReactMarkdown from "react-markdown";

function BlogPostDirectory() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch("posts.json");
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setError("Error fetching blog posts. Please try again later.");
    }
  };

  const renderPostEmoji = (type) => {
    switch (type) {
      case "talk":
        return "🎤";
      case "external-blog":
        return "🔗";
      case "internal-blog":
      default:
        return "📝";
    }
  };

  const renderBlogPostContent = (post) => {
    if (post.type === "internal-blog") {
      return <ReactMarkdown>{post.content}</ReactMarkdown>;
    } else {
      return <p>{post.description}</p>;
    }
  };

  const renderBlogPosts = () => {
    if (blogPosts.length === 0) {
      return <p>No blog posts found.</p>;
    }

    return blogPosts.map((post, index) => {
      return (
        <a key={index} href={post.url} target="_blank" rel="noopener noreferrer">
          <div className={`blog-post-item ${index % 2 === 0 ? "even" : ""}`}>
            <h3 className="blog-post-title">
              {renderPostEmoji(post.type)} {post.title}
            </h3>
            <p>Date: {post.date}</p>
            {renderBlogPostContent(post)}
          </div>
        </a>
      );
    });
  };

  return (
    <div className="blog-post-container">
      <h2>Posts</h2>
      {error && <p className="error">{error}</p>}
      {renderBlogPosts()}
    </div>
  );
}

export default BlogPostDirectory;
