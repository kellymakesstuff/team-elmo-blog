import React, { useEffect, useState} from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import {NavLink} from "react-router-dom"


export default function Nav() {
    return (
        <nav>
             <div className="nav">
                <NavLink className="logo" to="/">PostsApp</NavLink>
                <div className="links">
                    <NavLink className="link" to="/add-post">Add Post</NavLink>
                </div>
            </div> 
        </nav>
    )
}
