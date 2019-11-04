import React, { Component } from 'react'
import './Header'
import Header from './Header'
import Sidebar from './Sidebar'
import Profile from './Profile'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Id :''
        }
    }
    
    componentDidMount(){
        const { Id } = this.props.match.params;
        this.setState({Id : Id})
    }
    
    render() {
        return (
            <div>
                <Header/>
                <div className = "row">
                    <Sidebar/>
                    <Profile Id = {this.state.Id} />
                </div>
            </div>
        )
    }
}
export default Dashboard;