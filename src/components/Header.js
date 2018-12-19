import React from 'react';
import {NavLink} from 'react-router-dom';
const Header =()=>(
    <header>
      <h1>LMS</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Book List</NavLink>
      <NavLink to="/create" activeClassName="is-active">Add Book</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit Book</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  
    </header>
  );

  export default Header;