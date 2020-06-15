import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import './css/Main.css'

export default function Post({ post }) {
    return (
        <div className="post">
            <h1>Title: {post.title}</h1>
            <h2>Author: {post.author}</h2>
            <p>{post.post}</p>
            <img src={post.img} height="200px" width="auto" />
        </div>
    )
}
