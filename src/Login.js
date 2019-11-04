import React, { Component } from 'react'
import './Login.css'
import Cat from './cat.jpg'
import Back from './back.jpg'
 class Login extends Component {
    render() {
        return (
            <div class="background-login">
                <img id="background-image" src={Back} alt="Benzene"></img>
                <div class="loginbox">
                    <h1>
                        Hello There!!
                    </h1>
                    <img id="avtar" src={Cat} alt="batman"></img><br/>
                    <label>Admin</label><br/>   
                    <input type="text" id="username" placeholder="Enter Username" /><br/><br/>
                    <input type="password" id="password" placeholder="Enter Password..." /><br/><br/>
                    <input type="submit"><b>Submit</b></input><br /><br/>
                    <a href="unknown.com"><label>New Password?</label></a>
                </div>
            </div>
        )
    }
}
export default Login;