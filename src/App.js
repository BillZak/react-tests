import React, { useState, useEffect } from "react";
import "./App.css";
//import components
import Header from "./Components/Header/Header";
import Posts from "./Components/Posts/Posts";
import db from "./Firebase";

function App() {
  //useState serves as a temporary storage space for variables and components
  const [posts, setPosts] = useState([
    {
      username: "champ_gobain",
      imageUrl: "https://picsum.photos/200/300",
      caption: "wake up",
    },
  ]);

  //useEffect runs a piece of code based on a specific condition
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <Header />

      {posts.map((post) => (
        <Posts
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
