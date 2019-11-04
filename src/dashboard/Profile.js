import React, { Component } from 'react';
import axios from 'axios';
import Logo from './logo.jpg'

import '../style.css';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

 class Profile extends Component {
    constructor(props) {
        super(props)
        
       
        this.state = {
            
            student:{
                
            }
        }
        
    }
    
    componentDidMount(){
        
        axios.get(`http://localhost:4000/:Id`,axiosConfig)
        .then(res => { 
            if(res.data){
                console.log(res)
            }
            else console.log('error')
            
        }).catch(function(error){
      
            console.log(error);
          })
    }
    render() {
       
        return (
            <div className = " profile ">
                <div className = "m-4">
                   <button className = " btn-primary">Profile</button>
                   <i className="fas fa-pencil-alt float-right" style={{color:'green',cursor : 'pointer'}}></i>   </div>            
                        <table className="table m-4">
                            
                                <tbody>
                                    <tr>
                                        <th className="row">Name : </th>
                                        <td> Pranjal Agrawal</td>
                                        <td rowSpan = '3' > <img src = {Logo} alt = "Profile" width = "100px" /></td>
                                    </tr>
                                    <tr>
                                        <th className="row"> ID : </th>
                                        <td>{this.props.Id} </td>
                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Contact no : </th>
                                        <td> 7891217760</td>
                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> DOB : </th>
                                        <td> 21-02-2000</td>
                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Gender : </th>
                                        <td> MALE</td>
                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Category : </th>
                                        <td> GENERAL</td>                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Addmission : </th>
                                        <td> Jossa</td>                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Branch : </th>
                                        <td> Computer science and Engineering (CSE)</td>                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Course : </th>
                                        <td> B.tech(4 year)</td>                                        
                                    </tr>
                                    <tr>
                                        <th className="row"> Section : </th>
                                        <td> A4 </td>
                                        
                                    </tr>
                                </tbody>
                        </table>

                   
                   
                
            </div>
        )
    }
}
export default Profile