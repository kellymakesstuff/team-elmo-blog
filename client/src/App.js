import React, { useEffect, useState } from 'react';
import Post from './components/Post'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';

function App() {

  const [post, updatePost] = useState({
    author: "Baby Yoda",
    img: "https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    post: "I love cats.",
    title: "Cats love me."
  })

  return (
    <div className="app">
      < Post post={post} />
    </div>
  );
}

export default App;
