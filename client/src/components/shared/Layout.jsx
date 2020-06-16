import React, { useEffect, useState} from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'

const Layout = (props) => {
    return (
        <div className="layout">
            <Nav />
                <div className="layout-children">
                    {props.children}
                </div>
        </div>
    )
}

export default Layout