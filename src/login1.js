import React, { Component } from 'react';


import axios from 'axios';

import './login1.css';
let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};

 class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id: 'this.',
        password: '',
        profile:''
         
      }
      this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    
    onSubmit = (e) =>{
      e.preventDefault();
      var Id = this.state.id;
      var password = this.state.password;
      console.log(Id)
      axios.post('http://localhost:4000/student', {
        Id,
        password,
        
      },axiosConfig)
      .then(function (response) {
        if(response.data !== 'wrong password'){
          console.log(response.data);
          this.props.history.push('/thank-you');}
        else
          alert(response.data)
        
      })
      .catch(function (error) {
      
        console.log(error);
      });
    }
    



    render() {
        return (
          <div class="model-container ">
            
           <div className="card  bg-light">
             <div className="card-body">   
               <h4 className="card-title m-1 p-0">LogIn </h4>
               <p className="card-text m-1">Welcome to portal...</p>
               <form onSubmit={this.onSubmit}>
                   <div class="form-group">
                     {/* <label for="">username</label> */}
                     <input type="text"
                       className="form-control m-0" name="id" value = {this.state.id} onChange = {this.onChange}  placeholder="Enter username" />
                     
                   </div>
                   <div className="form-group m-0">
                     {/* <label for="password">password</label> */}
                     <input type="password" className="form-control" name="password" value={this.state.password} onChange = {this.onChange}  placeholder="Enter Password..." />
                   </div>
                   <i className = "text-primary">Forgot password</i>
                   <button type="submit" className="btn btn-primary mt-1">LogIn</button>
               </form>
             </div>
           </div></div>
           
        )
    }
}

export default Login;
