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
