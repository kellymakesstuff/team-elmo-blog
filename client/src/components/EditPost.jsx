

import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { getPost, updatePost, deletePost } from "../services/posts"
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
    console.log("hello",  )
    let { id } = this.props.match.params
    console.log("line28", (id))
    const data = await getPost(id)
    this.setState({ post:data })
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
      return <Redirect to={`/posts/`} />
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
            <button onClick={() => deletePost(post._id)}>delete post</button>

          </form>
          </div>

      </div>
    )
  }
}

export default withRouter (EditPost)