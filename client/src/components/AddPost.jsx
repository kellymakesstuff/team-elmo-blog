
import React, { useEffect, useState, Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import { createPost } from '../services/posts'


class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                author: '',
                img: '',
                post: '',
                title: ''
            }
        }
    }

    handleAuthorChange = event => {
        const value = event.target.value
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                author: value
            }
        }))
    }

    handleImgChange = event => {
        const value = event.target.value
        this.setState(prevState => ({
            post:{
            ...prevState.post, 
            img: value
            }
        }))
    }

    handlePostChange = event => {
        const value = event.target.value
        this.setState(prevState => ({
            post:{
            ...prevState.post, 
            post: value
            }
        }))
    }

    handleTitleChange = event => {
        const value = event.target.value
        this.setState(prevState => ({
            post:{
            ...prevState.post, 
            title: value
            }
        }))
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const create = await createPost(this.state.post)
        //    this.setState({create})
    }


    render() {

        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleAuthorChange} type='text' placeholder="author" />
                    <input onChange={this.handleImgChange} type='text' placeholder="img" />
                    <input onChange={this.handlePostChange} type='text' placeholder="post" />
                    <input onChange={this.handleTitleChange} type='text' placeholder="title" />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddPost