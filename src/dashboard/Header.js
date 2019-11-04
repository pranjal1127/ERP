import React, { Component } from 'react'
import './Header.css';

export class Header extends Component {
    render() {
        return (
            
               <div className="nav-top">
                <div className="nav-title">IIIT KOTA </div>
                
                  
                   <li  className="link">
                   <i className="fa fa-user-circle" ></i> Admin <i className="fa fa-angle-down" aria-hidden="true"></i>
                   
                   </li>
                    
                </div>
           
        )
    }
}

export default Header;
