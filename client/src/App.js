import React, { useEffect, useState } from 'react';
import Post from './components/Post'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';

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


  return (
    <div className="app">
      {post.map(post => < Post post={post} />)}

    </div>
  );
}

export default App;

// {
//   author: "Baby Yoda",
//   img: "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
//   post: "I love cats.",
//   title: "Cats love me."
// }
