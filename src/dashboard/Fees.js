import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios'
class Fees extends Component {
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
        axios.get(`http://localhost:4000/Fees/${Id}`)
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
        console.log('data: ' ,data)
        return (
            <div>
                <Header />
                <Sidebar/>                
            <div className="profile table">
                <table class="table table-striped table-inverse table-responsive">
                    <thead class="thead-inverse">
                        <tr>
                            <th>Year</th>
                            <th>Type</th>
                            <th>Payment Mode</th>
                            <th>Transcation ID</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Download</th>
                        </tr>
                        </thead>
                        <tbody>
                            { data.map(i  => <Fee key = {i.transaction_id.x} fee = {i}/>)}                            
                        </tbody>                      
                </table>
            </div></div>
        )
    }
}
class Fee extends Component {
    render() {
        return (
            
            <React.Fragment>
            <tr>
                 <td>{this.props.fee.year}</td>
                 <td>{this.props.fee.type}</td>
                 <td>{this.props.fee.payment_mode}</td>
                 <td>{this.props.fee.transaction_id}</td>
                 <td>{this.props.fee.status}</td>
                 <td>{this.props.fee.Amount}</td>
                 <td><i className="fa fa-download"></i></td>
             </tr>
        </React.Fragment>
        )
    }
}


export default Fees;