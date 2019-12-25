import React, { Component } from "react";
import "./HeaderNavbar.css";
import {Link} from "react-router-dom";
import fireBase from "../../firebaseConfig/firebaseConfig";

class HeaderNavbar extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        fireBase.auth().signOut();
    }

    render() {
        return (
            <div className="SelectDish">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/bookCategory">Categories</Link>
                    </li>
                    <li>
                        <Link to="/bookList">My Book List</Link>
                    </li>
                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropbtn">Dropdown</a>
                        <div className="dropdown-content">
                            <Link to="/">Link 1</Link>
                            <Link to="/">Link 2</Link>
                            <Link to="/">Link 3</Link>
                        </div>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <a onClick={this.logout}>Logout</a>
                    </li>
                    <li className="shoppingCart">
                        <Link to="/shoppingCart">&#x1F6D2;</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HeaderNavbar;
