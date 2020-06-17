// import React, { useEffect, useState} from 'react';
// import { Redirect} from 'react-router-dom'
// // import axios from 'axios'
// import {getPost, updatePost} from "../services/posts"

// export default function EditPost() {
//     return (
//         <div>

//         </div>
//     )
// }


import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getPost, updatePost } from "../services/posts"
import "./EditPost.css"



class EditPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        author: "",
        img: "",
        post: "",
        title: ""
      },
      updated: false
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const post = await getPost(id)
    this.setState({ post })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let { id } = this.props.match.params
    const updated = await updatePost(id, this.state.post)
    this.setState({ updated })
  }




  render() {

    const { post, updated } = this.state
    if (updated) {
      return <Redirect to={`/posts/${this.props.match.params}`} />
    }

    return (
      <div>
        <div className="main-edit"> 
        <img className="edit-image" src={post.img} alt={post.author} />
        {/* <form className="first-form" onSubmit ={this.handleSubmit}>
          
        </form> */}

          <form className="edit-form" onSubmit={this.handleSubmit}>

          <input
            className="title-change"
            placeholder="Title"
            value={post.title}
            name="title"
            required
            onChange={this.handleChange}
          />
            
          <input
            className="img-change"
            placeholder="Image"
            value={post.img}
            name="img"
            required
            onChange={this.handleChange}
          />
          <input
            className="author-change"
            placeholder="Author"
            value={post.author}
            name="author"
            required
            onChange={this.handleChange}
          />

          <textarea
            className="post-change"
            // row={10}
            // cols={70}
            placeholder="Post"
            value={post.post}
            name="post"
            required
            onChange={this.handleChange}
          />

      

          <button type='submit' className="save-button">Save</button>

          </form>
          </div>

      </div>
    )
  }
}

export default EditPost