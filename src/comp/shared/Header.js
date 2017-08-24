import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Navbar, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../styles/nav.sass'
import SideBar from './SideBar'

class Header extends React.Component {

  render () {
    return (
      <header>
        <Navbar>
          <UncontrolledDropdown>
            <DropdownToggle caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Navbar>
        <SideBar />
        {this.props.children}
      </header>
    );
  }
}

export default Header
 