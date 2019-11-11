import React, { Component } from 'react'
import Tsidebar from './Tsidebar'
import Header from './Header'
import axios from 'axios'
class Salary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            status : [],
            test:{
                "year": "2018-19",
                "type": "Hostel",
                "transaction_id": "14201998",
                "payment_mode": "Cash",
                "status": "To be Refunded",
                "id": "2018KUCP1127",
                "Amount": "26,000"
            }      
            
        }
    }
    
    
    componentDidMount(){
        const Id = localStorage.getItem('user')       
        axios.get(`http://localhost:4000/Salary/${Id}`)
        .then(res => { 
            if(res.data){
                console.log(res.data)
                this.setState({status: res.data})
                console.log(this.state.status[0])
               
            }
            else console.log('error')
            
        }).catch(function(error){
      
            console.log(error);
          })
        
    }
    render() {        
        const data = this.state.status
        const o = data[0]
        let keys = [];
        for(var k in o) keys.push(k);
        console.log('data: ' ,data)
        return (
            <div>
                <Header />
                <Tsidebar/>                
            <div className="profile table">
                <table class="table table-striped table-inverse table-responsive">
                    <thead class="thead-inverse">
                        <tr>
                            
                            {keys.map(i => (<th>{i}</th>))}
                        </tr>
                        </thead>
                        <tbody>
                            { data.map(i  => <Row key = {i.transactionid} fee = {i}/>)}                            
                        </tbody>                      
                </table>
            </div></div>
        )
    }
}
class Row extends Component {
    render() {
        const data = this.props.fee
        const values = Object.values(data)
        return (
            
            <React.Fragment>
            <tr>
                 {/* {keys.map(i => (<th>{i}</th>))} */}
                 {values.map(i=>(<td>{i}</td>))}
                 <td><i className="fa fa-download"></i></td>
             </tr>
        </React.Fragment>
        )
    }
}


export default Salary;