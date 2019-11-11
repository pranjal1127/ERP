import React, { Component } from 'react'
import Tsidebar from './Tsidebar'
import Header from './Header'
import axios from 'axios'
import '../style.css'


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };


class Tattendance extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            attendence : [],
            id:'',
            July:'',
            August:'',
            September:'',
            October:'',
            November:'',
            December:''  
            
        }
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = e => {
        const Id = localStorage.getItem('user') ;
        const {id,July,August,September,October,November,December} = this.state;
        const att = {id,July,August,September,October,November,December}
        console.log(att)
        axios.post(`http://localhost:4000/teacher/attendance/new/${Id}`,att,axiosConfig)
            .then(res => {
                console.log(res.data);
            })

    }
    
    
    componentDidMount(){
        const Id = localStorage.getItem('user')       
        axios.get(`http://localhost:4000/teacher/attendance/${Id}`)
        .then(res => { 
            if(res.data){
                console.log(res.data)
                this.setState({attendence: res.data})
                console.log(this.state.attendence[0])
               
            }
            else console.log('error')
            
        }).catch(function(error){
      
            console.log(error);
          })
        
    }
    render() {        
        const data = this.state.attendence
        const o = data[0]
        let keys = [];
        for(var k in o) keys.push(k);
        console.log('data: ' ,data)
        console.log('data: ' ,keys)
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
                            { data.map(i  => <Row key = {i.id} fee = {i}/>)}                            
                        </tbody>
                        
                                             
                </table>
                <form onSubmit={this.onSubmit}>
                    <input className="mx-1 inputId rounded"  name = "id" value = {this.state.id} placeholder = "Enter Id" onChange = {this.onChange} />
                    <input className="mx-1 inputAtt rounded" name = "July" value = {this.state.July} placeholder = "July" onChange = {this.onChange} />
                    <input className="mx-1 inputAtt rounded" name = "August" value = {this.state.August} placeholder = "August" onChange = {this.onChange} />
                    <input className="mx-1 inputAtt rounded" name = "September" value = {this.state.September} placeholder = "September" onChange = {this.onChange} />
                    <input className="mx-1 inputAtt rounded" name = "October" value = {this.state.October} placeholder = "October" onChange = {this.onChange} />
                    <input className="mx-1 inputAtt rounded" name = "November" value = {this.state.November} placeholder = "November" onChange = {this.onChange} />
                    <input className="mx-1 inputAtt rounded" name = "December" value = {this.state.December} placeholder = "December" onChange = {this.onChange} />
                    <input type='submit' value = "Add" className="btn-primary rounded"/> 
                </form>
                
            </div>
                
            
            </div>
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
                 {values.map(i=>(<td>{i}</td>))}
             </tr>
        </React.Fragment>
        )
    }
}


export default Tattendance;