import React, { Component } from 'react'


import axios from 'axios'
import './Header'
import Header from './Header'
import Sidebar from './Sidebar'
import Profile from './Profile'



class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Id :'',
             profile:{

             },
             sname:{}
            
        }
    }
    


   // chartData = ()=>{
    //     let subName = ['adbms','adms','aoops','apython','ampmc','aeco']
    //     for(let i = 0;i <6;i++){
    //         const { Id } = this.props.match.params;
    //         let count = subName[i];
    //         axios.get(`http://localhost:4000/Attendance/${Id}`,{Id,count})
    //         .then(res => { 
    //             if(res.data){
    //                  const a = res.data;
    //                 console.log(res.data)
    //                 // this.setState({profile : res.data})
    //                 // console.log(this.state.profile)
    //                 this.setState(() =>{
    //                     this.state.sub.push(Object.values(a))
    //                     console.log(this.state)
    //                 } )
    //             }
    //             else console.log('error')
            
    //         }).catch(function(error){
        
    //             console.log(error);
    //         })
    //         }
    // }
    


    componentDidMount(){
        // const { Id } = this.props.match.params;
        const Id = localStorage.getItem('user')
       
        axios.get(`http://localhost:4000/${Id}`)
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

         //var sName='adbms'
        //   axios.get(`http://localhost:4000/Attendance/${Id}`,{Id,sName})
        // .then(res => { 
        //     if(res.data){
        //         console.log(res.data)
        //         this.setState({sname : res.data})
        //         console.log(this.state.sname)
        //     }
        //     else console.log('error')
            
        // }).catch(function(error){
      
        //     console.log(error);
        //   })

          const token = localStorage.getItem('user')
          console.log("ID:",token)
    }
    
    render() {
        //  const {pathname} = this.props.location;
        return (
            <div>
                <Header/>
                <div className = "row">
                    <Sidebar value = {this.state.profile} />  
                    {/* <Router>                              */}
                        <Profile  value = {this.state.profile} />
                        
                        
                    {/* </Router> */}
                </div>
            </div>
        )
    }
}
export default Dashboard;