import React, { useEffect, useState} from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import createPost from '../services/posts'

export default function AddPost() {
    return (
        <div>
            <h1>Add Post</h1>
            <form>
                <input type='text' placeholder="author"/>
                <input type='text' placeholder="img"/>
                <input type='text' placeholder="post"/>
                <input type='text' placeholder="title"/>
                <button>submit</button>
            </form>
        </div>
    )
}
import React, { useEffect, useState, Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import createPost from '../services/posts'


class AddPost extends Component {
    constructor() {
        super()
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
        this.setState({
            author: event.target.value
        })
    }

    handleImgChange = event => {
        this.setState({
            img: event.target.value
        })
    }

    handlePostChange = event => {
        this.setState({
            post: event.target.value
        })
    }

    handleTitleChange = event => {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
       const create = await createPost()
    }



    render() {

        return (
            <div>
                <h1>Add Post</h1>
                <form>
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