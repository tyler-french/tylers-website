import React, { useEffect, useState } from "react";
import "./BlogPostDirectory.css";
import { remark } from "remark";
import remarkHtml from "remark-html";

function BlogPostDirectory() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);
  const [clickedPostContent, setClickedPostContent] = useState(null);

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

  const handlePostClick = (post) => {
    if (post.type === "internal-blog") {
      fetchInternalPostContent(post.url);
    } else {
      window.location.href = post.url;
    }
  };

  const fetchInternalPostContent = async (url) => {
    try {
      const response = await fetch(url);
      const content = await response.text();
      const htmlContent = remark().use(remarkHtml).processSync(content, { baseURL: url }).toString();
      setClickedPostContent(htmlContent);
    } catch (error) {
      console.error("Error fetching blog post content:", error);
      setError("Error fetching blog post content. Please try again later.");
    }
  };

  const handleCloseClick = () => {
    setClickedPostContent(null);
  };

  const renderClickedPostOverlay = () => {
    if (!clickedPostContent) {
      return null;
    }

    return (
      <div className="post-overlay" onClick={handleCloseClick}>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: clickedPostContent }} />
      </div>
    );
  };

  const renderBlogPosts = () => {
    if (blogPosts.length === 0) {
      return <p>No blog posts found.</p>;
    }

    return blogPosts.map((post, index) => {
      return (
        <div key={index} className={`blog-post-item ${index % 2 === 0 ? "even" : ""}`}>
          <h3 className="blog-post-title" onClick={() => handlePostClick(post)}>
            {renderPostEmoji(post.type)} {post.title}
          </h3>
          <p>Date: {post.date}</p>
        </div>
      );
    });
  };

  return (
    <div className="blog-post-container">
      <h2>Posts</h2>
      {error && <p className="error">{error}</p>}
      {renderBlogPosts()}
      {renderClickedPostOverlay()}
    </div>
  );
}

export default BlogPostDirectory;
