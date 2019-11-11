import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import Tsidebar from './Tsidebar'
import Tprofile from './Tprofile'

 class Tdashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             profile:{
                 
             }
        }
    }

    componentDidMount(){
        const Id = localStorage.getItem('user')
        axios.get(`http://localhost:4000/teacher/${Id}`)
        .then(res => { 
            if(res.data){
                console.log(res.data)
                this.setState({profile : res.data})
                console.log(this.state.profile)
            }
            else console.log('error')
            
        }).catch(function(error){
      
            console.log(error);
          })
          console.log(this.state.profile)
        
    }
    
    render() {
        const {profile} = this.state
        return (
            <div>
                <Header />
                <div className = "row">
                    <Tsidebar key = {profile.tid} profile = {profile} />
                    <Tprofile profile = {this.state.profile} />
                </div>
            </div>
        )
    }
}

export default Tdashboard;