import React, { Component } from 'react'
import axios from 'axios'

import Header from './Header'
import Sidebar from './Sidebar'

import { Bar} from "react-chartjs-2";


 
class Attendance extends Component {
    constructor(props) {
        super(props)  

        this.state = {
            data:[],
            
            chartData:{
                

                    }

             

        }

    }
    componentDidMount() {
        const Id = localStorage.getItem('user') 
        const subGroup = ["adbms","adms","aoops","apython","ampmc","aeco"]
        const subGroup1 = ["dbms","dms","oops","python","mpmc","eco"]
        for(let i = 0;i <subGroup.length;i++){
            axios.get(`http://localhost:4000/Attendance/${subGroup[i]}/${Id}`)
            .then(res => { 
                if(res.data){
                    console.log(res.data)
                    const [,...att] = Object.values(res.data)
                    att.push(subGroup1[i].toUpperCase())
                    this.setState(prevState => ({
                        data: [...prevState.data, att]
                      }))
                    
                    console.log('data:',this.state.data)
                    
                
                }
                else console.log('error')
                
            }).catch(function(error){
        
                console.log(error);
            })

            } 
        
        
    }
 
    render() {
        const Id = localStorage.getItem('user')
         console.log('data:2',this.state.data)
        return (
            <div>
                <Header />
                <Sidebar value = {Id}/>
                <div className="Charts attendance row">
                    {this.state.data.map( i =>
                        <Bar    

                            data={{
                                labels: ["July","August", "September","October","November","December"],
                                datasets: [{
                                    label: "Attendance",
                                    data: i,
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'] ,
                                    borderColor: [
                                        'rgba(255,99,132,1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'],
                                    borderWidth: 1                  
                                        }]}
                            } 
                            options={ {
                                responsive: false,
                                aspectRatio:1.5,
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                        maxRotation: 90,
                                        minRotation: 80}
                                            }],
                                    yAxes: [{
                                        ticks: {
                                        beginAtZero: true}
                                            }]
                                        },
                                title: {
                                        display: true,
                                        text: i[6] + " Attendance Per Month",
                                        fontSize:25
                                        },
                                legend: {
                                    display: true,
                                    position:"right"
                                }
                                        } }
        
                                width={800}
                                height = {500}/>

                    )}
    </div>
            </div>
        )

    }

}

export default Attendance;