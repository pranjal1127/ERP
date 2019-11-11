import React, { Component } from 'react';
//import axios from 'axios';
import '../style.css';
import Studentslevel from './Studentslevel'
class Tprofile extends Component {
    constructor(props) {
        super(props)
        
       
        this.state = {
            student :{
                
            }
           
        }
        
    }
    
   
    render() {
       const {tid,Name,DOB,Gender,Subject,Email,Qualification,Contact_No} = this.props.profile
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
                                        <td>{tid} </td>
                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Contact no : </th>
                                        <td>{Contact_No}</td>
                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Email : </th>
                                        <td> {Email} </td>
                                        
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
                                        <th className="row"> Subject : </th>
                                        <td>{Subject}</td>                                        
                                    </tr>
                                    
                                    <tr>
                                        <th className="row"> Qualification : </th>
                                        <td> {Qualification}</td>                                        
                                    </tr>
                                    
                                </tbody>
                        </table>
                
            </div>
        )
    }
}
export default Tprofile