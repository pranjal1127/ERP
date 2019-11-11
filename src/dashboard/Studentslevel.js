import React, { Component } from 'react'
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

class Studentslevel extends Component {

     constructor(props) {
         super(props)

         this.state = {
             chartData: {
                 labels: ["Brilliant","Excellent","Good","Average","Fail"],
                 datasets: [{
                         label: "Performance",
                         data: [5, 15, 40, 50, 2],
                         backgroundColor: [
                             'rgba(255, 99, 132, 0.2)',
                             'rgba(54, 162, 235, 0.2)',
                             'rgba(255, 206, 86, 0.2)',
                             'rgba(75, 192, 192, 0.2)',
                             'rgba(153, 102, 255, 0.2)',
                            //  'rgba(255, 159, 64, 0.2)'
                         ],
                        borderColor:
                         [
                             'rgba(255,99,132,1)',
                             'rgba(54, 162, 235, 1)',
                             'rgba(255, 206, 86, 1)',
                             'rgba(75, 192, 192, 1)',
                             'rgba(153, 102, 255, 1)',
                            //  'rgba(255, 159, 64, 1)'
                         ],
                         borderWidth: 1
                     },
                 ]
             }
         }
     }
    render() {
        return (
            <div>
                <Pie
                    data={this.state.chartData}
                    options={{
                        responsive: false,
                        scales:
                        {
                            xAxes: [{
                                ticks: {
                                    maxRotation: 90,
                                    minRotation: 80
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        title: {
                            display: true,
                            text: "Status of Class",
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: "right"
                        }
                    }
                    }
                    width={800}
                    height={500}
                />
            </div>
        )
    }
}
export default Studentslevel;