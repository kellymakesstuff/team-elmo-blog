import React, { useEffect, useState } from 'react';
import Post from './components/Post'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Nav from "./components/shared/Nav.jsx"
import Search from "./components/Search"
import PostDetail from "./components/PostDetail"
import PostList from "./components/PostList"
import AddPost from "./components/AddPost.jsx"
import EditPost from './components/EditPost';


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
      <Search post={post} />
    </header>
    <Route path="/" exact>
      <div className="container">
        <PostList post={post} />
      </div>
    </Route>

    <Route path="/add-post">
      <AddPost />
    </Route>

    <Route exact path="/posts/:id/edit" component={EditPost} />


    <Route exact path="/posts/:id">
      <PostDetail props={post} />
    </Route>

  </div >

}

export default App;

// {
//   author: "Baby Yoda",
//   img: "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
//   post: "I love cats.",
//   title: "Cats love me."
// }
