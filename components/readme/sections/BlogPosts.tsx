const BlogPosts = () => {
  const posts = [
    { title: "Building Real-Time Collaboration: Lessons from DevFlow", url: "#", date: "Feb 15, 2025" },
    { title: "Why TypeScript is Worth the Investment in 2025", url: "#", date: "Jan 28, 2025" },
    { title: "Optimizing React Performance: A Deep Dive into Memoization", url: "#", date: "Dec 10, 2024" },
    { title: "From Monolith to Microservices: A Migration Story", url: "#", date: "Nov 5, 2024" },
    { title: "The Developer's Guide to WebSocket Architecture", url: "#", date: "Oct 18, 2024" },
  ];

  return (
    <section id="blog">
      <h2 className="text-foreground" style={{ fontSize: "1.5em", fontWeight: 600, paddingBottom: "0.3em", borderBottom: "1px solid hsl(var(--border))", marginTop: "24px", marginBottom: "16px" }}>
        ✍️ Latest Blog Posts
      </h2>
      <p className="text-xs text-muted-foreground font-mono mb-2">{"<!-- BLOG-POST-LIST:START -->"}</p>
      <ul style={{ paddingLeft: "2em", marginBottom: "8px" }}>
        {posts.map((post) => (
          <li key={post.title} style={{ marginTop: "0.25em" }}>
            <a href={post.url} className="text-primary hover:underline">{post.title}</a>
            <span className="text-muted-foreground text-sm"> — {post.date}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground font-mono">{"<!-- BLOG-POST-LIST:END -->"}</p>
    </section>
  );
};

export default BlogPosts;
