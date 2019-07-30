import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export default class ChartWrapper extends Component {

    static defaultProps = {
        defaultOptions: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Attendance on all Subject",
                fontSize: 25
            },
            legend: {
                display: true,
                position: 'right'
            },
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 0.3
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 2
                    }
                }]
            }
        }
    }
    render() {
        return (
            <div className="container-fluid border border-color-dark mb-3 w-50 h-50">
                <Bar
                    width={400}
                    height={400}
                    data={{
                        labels: this.props.label,
                        datasets: this.props.dataset
                    }
                    }
                    options={this.props.defaultOptions}
                />
            </div>
        )
    }
}

