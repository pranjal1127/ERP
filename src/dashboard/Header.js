import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


import '../style.css';
// import '../panel.css';


export class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             info:false,
             isLogin: true
        }
        this.handle = this.handle.bind(this)
    }

        handle = (e) =>{
            e.preventDefault()
            localStorage.removeItem('user')
            localStorage.removeItem('userName')
            this.setState({isLogin: false})
            return <Redirect to='/teacher'/>
        }
        componentDidMount(){
            if(!this.setState.isLogin){
                // this.props.history.push(`/`)
            //    return <Redirect to='/'/>
            }
        }
    
    
    


    render() {
        
        const Id = localStorage.getItem('user')
        const Name = localStorage.getItem('userName')
        console.log(Name,Id)
        console.log("info : ",this.state.info)
        const IMG = 'https://joeschmoe.io/api/v1/' + Name ;
        
        return (
            
               <div className="nav-top">
                    <div className="nav-title">IIIT KOTA </div>
                
                  
                   <li onClick={() =>{this.setState({info : !this.state.info})}} className="link" style={{cursor : 'pointer'}}>
                   <i className="fa fa-user-circle" ></i> Profile <i className="fa fa-angle-down" ></i>
                   
                   </li>
                   {this.state.info ? (
                        <div class="panel">
                        <div className= "user">
                            <img src = {IMG} className = 'card-img ' alt = "p" />
                            <div className = 'cardBody'>
                                <h5>{Name}</h5>
                                <p>{Id}</p>
                            </div>
                        </div> 
                        <button type="button" name="logout" onClick = {this.handle} className="btn btn-danger " id="lo"><a href="http://localhost:3000">Log Out</a></button>
                        <input name="" id="set" class="btn btn-primary" type="button" value="Settings"/>
                   </div>
                   ):null}
                   
                    {/* <div class="panel">
                        <div>
                            <img src = {IMG} className = 'card-img ' alt = "p" />
                            <div className = 'cardBody'>
                                {/* <h5>{this.props.value.Name}</h5>
                                <p>{this.props.value.ID}</p> */}
                                {/* <h5>Rishab</h5> */}
                                {/* <p>2018KUCP1131</p> */}
                            {/* </div>  */}
                        {/* </div> */}
                    {/* </div> */}
                </div>
           
        )
    }
}

export default withRouter(Header);
