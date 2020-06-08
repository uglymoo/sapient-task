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
        data: []
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
            pointStart: 2000
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


  componentWillReceiveProps = () => {
    this.setState({
      options: {
        series: [
          
          {
            name: 'ID',
            data: [
              this.props.chartValues.hits.map((dataValue)=>{
                console.log("DATA VALUES",dataValue);
                return dataValue.points
            }),
            
              
              this.props.chartValues.hits.map((dataValue)=>{
                console.log("DATA VALUES",dataValue);
                return dataValue.relevancy_score
            }),
            
            

            ]
          },
        ]
      }
    });

  }

  componentDidMount() {
      this.setState({
        options: {
          series: [
            
            {
              name: 'ID',
              data: [
                this.props.chartValues.hits.map((dataValue)=>{
                  console.log("DATA VALUES",dataValue);
                  return dataValue.points
              }),
              
                
                this.props.chartValues.hits.map((dataValue)=>{
                  console.log("DATA VALUES",dataValue);
                  return dataValue.relevancy_score
              }),
              
              

              ]
            },
          ]
        }
      });
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