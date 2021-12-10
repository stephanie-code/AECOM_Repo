import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
let data1

export default class LineChartRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log('line', this.props.data)
    this.getData()   
  }

  getData(){

    // data1 = this.props.data.map((res) => {
    //   let name = res.cityName;
    //   let latitude = res.latitude.toFixed(2);
    //   let longtitude = res.longtitude.toFixed(2);
    //   return { name, latitude, longtitude };
    // });
    this.setState({
      data: data1
    })
  }

  render() {
    return (
      // <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={1100}
        // width={this.props.width}
        height={300}
        data={this.state.data}
        margin={{
          top: 20,
          right: 50,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="cityName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="latitude" stroke="#8884d8" />
        <Line type="monotone" dataKey="longtitude" stroke="#82ca9d" />
      </LineChart>
      // </ResponsiveContainer>
    );
  }
}
