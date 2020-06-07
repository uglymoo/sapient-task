import React from "react";
// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.min.js";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more"; //module
HC_more(Highcharts); //init module

class VisualisationChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          events: {
            redraw() {
              console.log("redraw");
            }
          }
        },
            series: [{
        name: 'ID',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }],

    yAxis: {
        title: {
            text: 'Votes'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'ID'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    title:{
        text:''
    },
    
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 1500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
      }
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        options: {
          series: [
            {
              data: [
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20
              ]
            },
          ]
        }
      });
    }, 1000);
  }

  render() {
    return (
      <HighchartsReact
        constructorType={"chart"}
        ref={this.chartComponent}
        highcharts={Highcharts}
        options={this.state.options}
      />
    );
  }
}


export {VisualisationChart};