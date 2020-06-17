import React, { useEffect, useState, Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'



export default function Search({ post }) {
  let [searchTerm, updateSearchTerm] = ("")

  //make a function here to filter "post" with the item from the "searchTerm"

  console.log("Search", post)
  return <div class="searchDiv">
    <input
      type="text"
      className="input"
      onChange={(e) => updateSearchTerm(e)}
      // onKeyPress={keyPressed}
      placeholder="Search..."
    />
  </div>
}


// export default class Search extends Component {
//   constructor(post) {
//     super(post)
//     console.log("search props", post)
//   }
  // handleChange = (e) => {
  //   let postList = [];
  //   let newList = [];
  //   if (e.target.value !== "") {
  //     postList = this.props.items;
  //     newList = postList.filter(item => {
  //       const lc = item.toLowerCase();
  //       const filter = e.target.value.toLowerCase();
  //       return lc.includes(filter);
  //     });
  //   } else {
  //     newList = this.props.items;
  //   }
  //   this.setState({
  //     filtered: newList
  //   });
  // }

//   render() {
//     return <div class="searchDiv">
//       {/* <input
//         type="text"
//         className="input"
//         onChange={(e) => handleChange(e)}
//         // onKeyPress={keyPressed}
//         placeholder="Search..."
//       /> */}
//       <p>hi</p>
//     </div>
//   }

// }
