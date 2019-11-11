import React, { Component } from 'react';
//import axios from 'axios';


import '../style.css';



 class Profile extends Component {
    constructor(props) {
        super(props)
        
       
        this.state = {
            
            student:{
                
            }
        }
        
    }
    
   
    render() {
       const {ID,Name,DOB,Gender,Category,Admission,Branch,Course,Section,Contact_No} = this.props.value
       const IMG = 'https://joeschmoe.io/api/v1/' + Name;
       
        return (
            <div className = " profile ">
               
                <div className = "m-4">
                  <h1>Profile</h1>
                   <i className="fas fa-pencil-alt float-right" style={{color:'green',cursor : 'pointer'}}></i>   </div>            
                        <table className="table m-4">
                            
                                <tbody>
                                    <tr>
                                        <th className="row">Name : </th>
                                        <td>{Name}</td>
                                        <td rowSpan = '3' > <img src = {IMG} alt = "Profile" width = "100px" /></td>
                                    </tr>
                                    <tr>
                                        <th className="row"> ID : </th>
                                        <td>{ID} </td>
                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Contact no : </th>
                                        <td>{Contact_No}</td>
                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> DOB : </th>
                                        <td> {DOB}</td>
                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Gender : </th>
                                        <td> {Gender}</td>
                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Category : </th>
                                        <td>{Category}</td>                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Admission : </th>
                                        <td>{Admission}</td>                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Branch : </th>
                                        <td> {Branch}</td>                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Course : </th>
                                        <td> {Course}</td>                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Section : </th>
                                        <td> {Section} </td>
                                        
                                    </tr>
                                </tbody>
                        </table>

                   
                   
                
            </div>
        )
    }
}
export default Profile