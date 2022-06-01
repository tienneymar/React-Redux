import React from "react";
import "../Navigation/nav.scss";
import { Link, NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        {/* <Link to="/home"> Home</Link>
        <Link to="/todo"> ToDo</Link>
        <Link to="/about">About</Link> */}
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
          Todo
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          Users
        </NavLink>
      </div>
    );
  }
}
export default Nav;
