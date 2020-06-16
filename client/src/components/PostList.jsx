import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

export default function PostList({ post }) {
  return (
    <div>
      {post.map(post => < Post id={post._id} post={post} />)}
    </div>
  )
}

// // Pseudocode (Kelly)
// -needs links for each of the mapped posts
//   - needs routes with : id that go to the pageDetail with that id
