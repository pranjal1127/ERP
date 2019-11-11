import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


import '../style.css';

 class Sidebar extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     

    
    render() {
        // const image = 'https://joeschmoe.io/api/v1/' + this.props.value.Name;
        const Id = localStorage.getItem('user')
        const Name = localStorage.getItem('userName')
        console.log(Name,Id)
        console.log("info : ",this.state.info)
        const IMG = 'https://joeschmoe.io/api/v1/' + Name ;
        return (
            <div className='box'>
                <div className= "user">
                    <img src = {IMG} className = 'card-img ' alt = "p" />
                    <div className = 'cardBody'>
                        <h5>{Name}</h5>
                        <p>{Id}</p>
                    </div>
                </div>

                <ul className="topic">
                    <li><i className="fa fa-home" ></i> <NavLink style={{ color: 'white' }} to= {'/student'} >Home</NavLink></li>
                    <li><i className="fa fa-book"></i><NavLink style={{ color: 'white' }} to= {'/student/Attendance'} > Attendance</NavLink></li>
                    <li><i className="fas fa-award"></i> <NavLink style={{ color: 'white' }} to= {'/student/Performance'} > Performance</NavLink> </li>
                    <li><i className="fa fa-wallet" ></i> <NavLink style={{ color: 'white' }} to= {'/student/Fees'} >Fees</NavLink></li>
                </ul>

                <div className='about'>
                <i className="fa fa-copyright"> By Pranjal & team</i><br />
                version v1.0.0.1
            </div>

            </div>
            
            
        )
    }
}


export default Sidebar;