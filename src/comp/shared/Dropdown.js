import React, { Component } from 'react';
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import '../../styles/nav.sass'

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    } 
  }

  toggleOpen = () => {
    // e.preventDefault()
    let newIsOpen = !this.state.isOpen
    this.setState({
      isOpen : newIsOpen
    })

  }

  //TODO - make nested routes
  
  render() {
    return (
    
      <div className={"dropdown-container" + (this.state.isOpen ? " show" : "")}>
        <div className="dropdown-display" onClick={this.toggleOpen}>
          <span> Click Me</span>
          <FaAngleDown />
        </div>
        <div className="dropdown-list">
          <div className="list-container">
            <div className="list-item" onClick={this.toggleOpen}>Test Z-index</div>
            <div className="list-item" onClick={this.toggleOpen}>Test Z-index</div>
            <div className="list-item" onClick={this.toggleOpen}>Test Z-index</div>
            <div className="list-item" onClick={this.toggleOpen}>Test Z-index</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;



//close dropDown when we click anywhere on the document
// this.handleDocumentClick = this.handleDocumentClick.bind(this);
//this.removeEvents = this.removeEvents.bind(this);
// this.toggle = this.toggle.bind(this);