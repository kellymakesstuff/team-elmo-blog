import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import './css/Main.css'


export default function Post({ post }) {
  let [onePost, updateOnePost] = useState([])

  return <>
    <div className="post">
      <Link to={`posts/${post._id}`}>
        <h1 className="title">{post.title}</h1>
        <div className="img-container">
          <img className="post-img" src={post.img} />
        </div>
        <h2 className="author">Author: {post.author}</h2>
        <p className="post-text">{post.post}</p>
      </Link>
    </div>



  </>
}
