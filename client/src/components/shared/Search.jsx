import React, { useEffect, useState} from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import PostList from "./src/components/PostList.jsx"

export default function Search() {
    return (
        <div>
            <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        </div>
    )
}

handleChange(e) {
let PostList = [];
let newList = [];
if (e.target.value !== "") {
PostList = this.props.items;

newList = PostList.filter(item => {
  const lc = item.toLowerCase();
  const filter = e.target.value.toLowerCase();
  return lc.includes(filter);
});
} else {
newList = this.props.items;
}
this.setState({
filtered: newList
});
}