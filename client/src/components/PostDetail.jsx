import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

export default function PostDetail(props) {
  console.log("post detail", props)
  // const filteredPost = props.props.find(data => data.id === props.match.params.id)
  // console.log(filteredPost)


  return (
    <div className="postDetail">
      {/* <h1>{filteredPost.title}</h1> */}
      {/* @Felicia: I left the height and width here but you can change it to whatever you want so it's a main image like in a post  */}
      {/* <img src={props.img} height="200px" width="auto" />
      <h2>Author: {props.author}</h2>
      <p>{props.post}</p> */}
    </div>
  )
}
