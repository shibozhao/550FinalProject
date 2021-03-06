import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from "shards-react";

class MenuBar extends React.Component {
    render() {
        return(
            <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="/">DogPedia</NavbarBrand>
          <Nav navbar>
          <NavItem>
              <NavLink active href="/">
                Home
              </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active  href="/about" >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/searchbycriteria">
              Search by Criteria
            </NavLink>
          </NavItem>
            
          </Nav>
      </Navbar>
        )
    }
}

export default MenuBar
