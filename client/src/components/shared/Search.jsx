
import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import PostList from "./src/components/PostList";
import "./main.css"

export default function Search({ post, updatePost }) {
  const handleChange = (e) => {
    let PostList = [];
    let newList = [];
    if (e.target.value !== "") {
      PostList = post.data;
      newList = PostList.filter((item) => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = post.items;
    }
    useEffect(() => {
      updatePost(newList);
    }, []);
  };
  return (
    <div class="searchDiv">
      <input
        type="text"
        className="input"
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
}
