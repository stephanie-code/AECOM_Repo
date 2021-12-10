import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';
import { useSelector, useDispatch } from "react-redux";
import TitleBar from '../TitleBar';

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

const ChartRender = (props) => {
  
  const [data,setData] = useState([])

  useEffect(() => {
    const data1 = Array.from(props.data);
    const data2 = data1.map((data) => {
        let name = data.name;
        let latitude = data.latitude.toFixed(2);
        let longtitude = data.longtitude.toFixed(2);
        return { name, latitude, longtitude };
      });
    setData(data2)
  }, [data])

  return (
    <>
      {/* <Row>
        {/* <Col span={24} className='card_title'> <i class="fas fa-chart-line"></i> Chart </Col> */}
      {/* </Row>  */}
      <LineChart
        width={500}
        // width={this.props.width}
        height={300}
        data={data}
        // data={districtData}
        margin={{
          top: 20,
          right: 50,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name' />
        {/* <XAxis dataKey="name" /> */}
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
        <ReferenceLine y={9800} label="Max" stroke="red" /> */}
        <Line type="monotone" dataKey="latitude" stroke="#8884d8" />
        <Line type="monotone" dataKey="longtitude" stroke="#82ca9d" />
      </LineChart>
    </>
  );
}

export default ChartRender;