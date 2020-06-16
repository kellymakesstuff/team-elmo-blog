import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

export default function PostDetail({ post }) {
  return (
    <div className="postDetail">
      <h1>{post.title}</h1>
      {/* @Felicia: I left the height and width here but you can change it to whatever you want so it's a main image like in a post  */}
      <img src={post.img} height="200px" width="auto" />
      <h2>Author: {post.author}</h2>
      <p>{post.post}</p>
    </div>
  )
}
