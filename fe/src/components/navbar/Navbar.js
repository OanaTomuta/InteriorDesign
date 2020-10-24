import { CgCollage } from 'react-icons/cg'
import './Navbar.css';
import React from "react";
import { Link } from "react-router-dom";
const {Component} = require("react");


class Navbar extends Component{
    render() {
        return(
            <div className={"navbar"}>
                <div className={"navbar-container"}>
                    <Link to='/' className={"navbar-logo"}>
                        <CgCollage className={"navbar-icon"}/>
                            InHouse
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;