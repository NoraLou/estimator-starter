import React, {PropTypes} from 'react';
import {slide as Menu} from 'react-burger-menu';


const SideBar = () => {
    return (
      <Menu className="bm-menu">
          <div className="bm-item-list">Home</div>
          <div className="bm-item-list">Sure</div>
          <div className="bm-item-list">About</div>
      </Menu>
    );
};

export default SideBar;





