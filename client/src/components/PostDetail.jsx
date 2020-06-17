import React, { useEffect, useState } from 'react';
import { withRouter, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

function PostDetail(props) {
  console.log("post detail", props.data)
  console.log("second post", props)
  const filteredPost = props.data.find((post) => post._id === props.match.params.id)

  console.log(filteredPost)


  return (
    <div className="postDetail">
      {filteredPost && <div>
        <div>{filteredPost.title}</div>
        {/* @Felicia: I left the height and width here but you can change it to whatever you want so it's a main image like in a post  */}
        <img src={filteredPost.img} height="200px" width="auto" />
        <h2>Author: {filteredPost.author}</h2>

        <div>{filteredPost.post}</div>

      </div>
      }
    </div>

  )

}

export default withRouter(PostDetail)
