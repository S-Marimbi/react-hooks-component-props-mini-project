import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
   const posts = [
    { id: 1, title: "First Post", content: "Content of the first post" },
    { id: 2, title: "Second Post", content: "Content of the second post" },
    // Add more posts as needed
  ];

  return (
    <div className="App">
       <ArticleList posts={posts} />
      {/* Other content of your app */}
      <Header name="My Blog" />
      <About
        image="https://example.com/blog-image.jpg"
        about="Welcome to our blog! Here you'll find interesting articles about various topics."
      />
    </div>

  );
}

export default App;