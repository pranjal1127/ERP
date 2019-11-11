import React, { Component } from 'react';
import axios from 'axios';
import './style.css';


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
        admin:'',
        id: '',
        password: '',
        profile:{

        },
        wrong_password:false
         
      }
      //this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    componentDidUpdate(){
      
      const {profile} = this.state;
      if(profile === undefined){
        
      }
      else if(profile === 'wrong password'){
        if(this.state.wrong_password === false)
            this.setState({wrong_password:true})
      }
      else if(profile.ID ){
        localStorage.setItem('userName',profile.Name)
        localStorage.setItem('user',profile.ID)
        this.props.history.push(`/student`)
      }
      else if(profile.tid ){
        localStorage.setItem('user',profile.tid)
        localStorage.setItem('userName',profile.Name)
        this.props.history.push(`/teacher`)
       }
    }
    onSubmit = (e) =>{
      e.preventDefault();
      var Id = this.state.id.toUpperCase();
      var password = this.state.password;
      var admin = this.state.admin;
      console.log(Id)
      axios.post(`http://localhost:4000/${admin}`, {
        Id,
        password,
        
      },axiosConfig)
      .then((response) => {        
          this.setState({profile : response.data}) 
          
                 
      })
      .catch(function (error) {
      
        console.log(error);
      });
      console.log(this.state.profile)
      
    }
    



    render() {
        return (
          <div className="model-container ">
            
           <div className="card  bg-light">
             <div className="card-body">   
               <h4 className="card-title my-0 p-0">LogIn </h4>
               <p className="card-text m-1">Welcome to portal...</p>
               
               <form onSubmit={this.onSubmit}>
                  <div className="form-check form-check-inline mx-auto">
                    <label className="form-check-label mx-3">
                      <input className="form-check-input " type="radio" name="admin" id="1" value="student" onChange = {this.onChange}/> Student
                    </label>
                    <label className="form-check-label">
                      <input className="form-check-input mx-3" type="radio" name="admin" id="2" value="teacher" onChange = {this.onChange}/> Teacher
                    </label>
                  </div>
                   <div className="form-group">
                     {/* <label for="">username</label> */}
                     <input type="text"
                       className="form-control m-0" name="id" value = {this.state.id} onChange = {this.onChange}  placeholder="Enter username" />
                     
                   </div>
                   <div className="form-group m-0">
                     {/* <label for="password">password</label> */}
                     <input type="password" className="form-control" name="password" value={this.state.password} onChange = {this.onChange}  placeholder="Enter Password..." />
                   </div>
                   {this.state.wrong_password ? (
                        <p className = 'text-danger'>wrong password</p>
                          ) : null}
                   <i className = "text-primary">Forgot password</i>
                   <button type="submit" className="btn btn-primary mt-1">LogIn</button>
               </form>
             </div>
           </div></div>
           
        )
    }
}

export default Login;
