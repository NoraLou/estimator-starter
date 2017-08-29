import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import '../../styles/nav.sass'

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.componentDidUpdate.bind(this)
  }

  toggleOpen = () => {
    this.setState({
      isOpen : !this.state.isOpen
    })

  }

  /* Only have the click events enabled when the menu is open */
  // componentDidUpdate: function(prevProps, prevState) {
  //   if(this.props.isOpen && !prevProps.isOpen) {
  //     window.addEventListener('click', this.handleClickOutside);
  //     } else if(!this.props.isOpen && prevProps.isOpen) {
  //       window.removeEventListener('click', this.handleClickOutside);
  //     }   
  //   },

  componentDidUpdate(prevState) {
    console.log('componentDidUpdate  this :',  this)
    console.log('ReactDOM :', ReactDOM)

    if (this.state.isOpen === prevState.isOpen) {
      return;
    }

    const menuItems = ReactDOM.findDOMNode(this)
    //if it is open and it has changed from  being closed before - add the eventhandler to the window, and the menu items.
    if (this.state.isOpen && !prevProps.isOpen) {
      this.lastWindowClickEvent = this.handleClickOutside;
      document.addEventListener('click', this.lastWindowClickEvent)
      menuItems.addEventListener(menuItems.addEventListener('onkeydown', this.handleMenuItemKeyDown);
    }

  }


  handleClickOutside = (e) => {
    console.log('click :')
    var children = this.getDOMNode().getElementsByTagName('*');
    for(var x in children) {
        if(children[x] == e.target) { 
          return; 
        }
    }

    this.toggleOpen;
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