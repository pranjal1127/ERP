import React, { Component } from 'react'
import { Bar } from "react-chartjs-2";
import axios from  'axios'
import Header from './Header';
import Sidebar from './Sidebar';

class Performance extends Component {
    constructor(props) {
        super(props)  

        this.state = {
            data:[],
            maxData:[],
            chartData1:{
                labels: ["DBMS","OOPS","PYTHON","DMS","ECO","MPMC"],
                datasets: [{label: "Max Marks",
                            data: [40,39,40,31,37,35],},
                        {
                        label: "Your marks",
                        data: [30,22,38,28,30,28],
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

                }, 
                   
            
            ]

            }

             

        }

    }

    componentDidMount() {
        const Id = localStorage.getItem('user') 
        
       
            axios.get(`http://localhost:4000/performance/${Id}`)
            .then(res => { 
                    const [ ,...per] = Object.values(res.data)                    
                    this.setState(prevState => ({
                        data: per
                      }))
                    console.log('data:',this.state.data)
             }).catch(function(error){
                    console.log(error);
            })
            axios.get(`http://localhost:4000/performance/max/${Id}`)
            .then(res => { 
                                     
                    this.setState({
                        maxData: Object.values(res.data)
                      })
                    console.log('data2:',this.state.maxData)
             }).catch(function(error){
                    console.log(error);
            })

            
        
        
    }




    render() {
        return (
            <div>
                <Header />
                <Sidebar />
            
            <div className="Charts attendance">

            <Bar  

                data={{
                    labels: ["DBMS","OOPS","PYTHON","DMS","ECO","MPMC"],
                    datasets: [{label: "Max Marks",
                                data: this.state.maxData,},
                          {
                            label: "Your Marks",
                            data: this.state.data,
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
    
                    }
                        ]}
                            }
                    options={ {
                        responsive: false,
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
                                text: "Marks per Subject-MID TERM",
                                fontSize:25
                                },
                        legend: {
                            display: true,
                            position:"right"
                        }
                            } }

                    width={800}
                    height = {500}
                />
                 <Bar  

                    data={
                        this.state.chartData1} 
                        options={ {
                            responsive: false,
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
                                    text: "Marks per Subject-END TERM",
                                    fontSize:25
                                    },
                            legend: {
                                display: true,
                                position:"right"
                            }
                                } }

                            width={800}
                            height = {500} />
                                    </div></div>
                            )
                        }
                    }

export default Performance;