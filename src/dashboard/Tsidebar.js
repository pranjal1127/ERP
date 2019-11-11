import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import '../style.css';

 class Tsidebar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount(){

    }
    

    render() {
        const Id = localStorage.getItem('user')
        const Name = localStorage.getItem('userName')
        const image = 'https://joeschmoe.io/api/v1/' + Name;
        return (
            <div className='box'>
                <div className= "user">
                    <img src = {image} className = 'card-img ' alt = "p" />
                    <div className = 'cardBody'>
                        <h5>{Name}</h5>
                        <p>{Id}</p>
                    </div>
                </div>

                <ul className="topic">
                <li><i className="fa fa-home" ></i> <NavLink style={{ color: 'white' }} to= {'/teacher'} >Home</NavLink></li>
                    <li><i className="fa fa-book"></i><NavLink style={{ color: 'white' }} to= {'/teacher/Attendance'} > Attendance</NavLink></li>
                    <li><i className="fas fa-award"></i> <NavLink style={{ color: 'white' }} to= {'/teacher/Performance'} > Performance</NavLink> </li>
                    <li><i className="fas fa-award"></i> <NavLink style={{ color: 'white' }} to= {'/teacher/salary'} > Salary</NavLink> </li>
                    
                </ul>

                <div className='about'>
                <i className="fa fa-copyright"> By pranjal & team</i><br />
                version v1.0.0.1
            </div>

            </div>
            
            
        )
    }
}


export default Tsidebar;