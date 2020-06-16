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
import { Redirect} from 'react-router-dom'
import { getPost, updatePost } from "../services/posts"



class EditPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        author: "",
        img: "",
        post: "",
        title:""      
      },
      updated:false
    }
  }
  
  async componentDidMount() {
    let { id } = this.props.match.params
    const post = await getPost(id)
    this.setState({post})
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      product: {
        ...this.state.post,
          [name]:value
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let { id } = this.props.match.params
    const updated = await updatePost(id, this.state.post)
    this.setState({updated})
  }




  render() {

    const { post, update } = this.state
    if (updated) {
      return <Redirect to={`/posts/${this.props.match.params}`}/>
    }

    return (
      <div>

        
        
      </div>
    )
  }
}

export default EditPost