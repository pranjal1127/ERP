import React, { Component } from 'react'
import Tsidebar from './Tsidebar'
import Header from './Header'
import axios from 'axios'
import Studentslevel from './Studentslevel'
import TextFieldGroup from '../TextFieldGroup'

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

class Tperformance extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            attendence : [],
            Id:'',
            marks:'' ,
            
                    
        }    
        this.onChange = this.onChange.bind(this)
    
        
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) =>{
        
        const Id = localStorage.getItem('user') 
        const newID = this.state.Id.toUpperCase();
        const marks = this.state.marks;
        const all = this.state.attendence.map(i => i.ID )
        console.log(all)
        if(all.indexOf(newID) < 0){
            axios.post(`http://localhost:4000/teacher/performance/new/${Id}`,{
                ID : newID,
                marks: marks},axiosConfig)
            .then(res => {
                console.log(res.data);
            })
        }else{
            axios.post(`http://localhost:4000/teacher/performance/update/${Id}`,{
                ID : newID,
                marks: marks},axiosConfig)
            .then(res => {
                console.log(res.data);
            })

        }

    }

    
    
    componentDidMount(){
        const Id = localStorage.getItem('user')       
        axios.get(`http://localhost:4000/teacher/performance/${Id}`)
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
        return (
            <div>
                <Header />
                <Tsidebar/>                
            <div className="profile row">
                <table class="rishu table table-bordered table-responsive">
                
                    <thead class="thead-inverse">
                        <tr>
                            
                            {keys.map(i => (<th>{i}</th>))}
                        </tr>
                        </thead>
                        <tbody>
                            { data.map(i  => <Row key = {i.id} fee = {i}/>)} 
                            <td colSpan='2' className='p-0'>
                            <form onSubmit={this.onSubmit}>                     
                                <input className="m-1" name = "Id" value = {this.state.Id} placeholder = "Enter Id" onChange = {this.onChange} />
                                <input name = "marks" value = {this.state.marks} placeholder = "Enter marks" onChange = {this.onChange} />
                                <input type='submit' value = "Add" className="btn-primary"/>
                            </form>
                                </td> 
                                                     
                        </tbody>
                                          
                          
                                
                        
                            
                                   
                </table><br/>
                
                
                <Studentslevel />
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
             </tr>
        </React.Fragment>
        )
    }
}


export default Tperformance;