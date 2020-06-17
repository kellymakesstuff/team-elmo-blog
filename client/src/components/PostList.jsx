import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import Post from "../components/Post"


export default function PostList({ post }) {
  return (
    <div>

      {post.length > 0 && post.map(post => < Post  post={post} />)}
    </div>
  )
}

// // Pseudocode (Kelly)
// -needs links for each of the mapped posts
//   - needs routes with : id that go to the pageDetail with that id
