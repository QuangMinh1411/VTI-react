import React from "react";
import classes from "./BlogPosts.module.css";
import { useState } from "react";
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogPosts = await response.json();
  return blogPosts;
}

const BlogPosts = () => {
  const [loadedPosts, setLoadedPosts] = useState([]);

  function fetchPostsHandler() {
    fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }

  //   fetchPosts().then((fetchedPosts) => {
  //     setLoadedPosts(fetchedPosts);
  //   });
  return (
    <>
      <button onClick={fetchPostsHandler}>Fetch Posts</button>
      <ul className={classes.posts}>
        {loadedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default BlogPosts;
