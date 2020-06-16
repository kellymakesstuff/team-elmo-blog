import React, { useEffect, useState } from 'react';
import Post from './components/Post'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Nav from "./components/shared/Nav.jsx"

import PostList from "./components/PostList"
import AddPost from "./components/AddPost.jsx"


//
function App() {
  const [post, updatePost] = useState([])

  useEffect(() => {
    apiCall()

  }, [])

  let apiCall = async () => {
    let postData = await axios("https://blog-app-exercise-hw.herokuapp.com/api/posts")
    console.log(postData.data)
    updatePost(postData.data)
  }


  return <div>
    <header>
      <Nav />
    </header>
    <Route path="/" exact>
      <div className="container">
        <PostList post={post} />
      </div>
    </Route>

    <Route path="/add-post">
      <AddPost />
    </Route>
  </div>
}

export default App;

// {
//   author: "Baby Yoda",
//   img: "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
//   post: "I love cats.",
//   title: "Cats love me."
// }
