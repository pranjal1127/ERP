import React, { Component } from 'react';
import Logo from './logo.jpg';
import './Sidebar.css';

 class Sidebar extends Component {
    render() {
        return (
            <div className='box'>
                <div className= "user">
                    <img src = {Logo} className = 'card-img ' alt = "p" />
                    <div className = 'cardBody'>
                        <h5>Pranjal Agrawal</h5>
                        <p>2018KUCP1127</p>
                    </div>
                </div>

                <ul className="topic">
                    <li><i className="fa fa-home" ></i> Home </li>
                    <li><i className="fa fa-book"></i> Attendence</li>
                    <li><i className="fas fa-award"></i>  Performance</li>
                    <li><i className="fa fa-wallet" ></i> Fees</li>
                </ul>

                <div className='about'>
                <i className="fa fa-copyright"> By pranjal & team</i><br />
                version v1.0.0.1
            </div>

            </div>
            
            
        )
    }
}


export default Sidebar;