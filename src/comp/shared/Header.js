import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { Navbar, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import { Navbar } from 'reactstrap';
import '../../styles/nav.sass'
import Dropdown from './Dropdown'
import SideBar from './SideBar'

class Header extends React.Component {

  render () {
    return (
      <nav style={{width: '100%', background:'gainsboro', height: '50px'}}>
        <Dropdown />

      </nav>

    );
  }
}

export default Header
 