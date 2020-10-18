import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Routes from "./components/Routes";

import SAMPLE_DATA from "./sampleData";

function App() {
  const [posts, setPosts] = useState(SAMPLE_DATA);

  return (
    <>
      <Header />
      <Routes posts={posts} />
    </>
  );
}

export default App;
