import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';

const data = [
  { name: 'Low', value: 400 },
  { name: 'Middle', value: 300 },
  { name: 'Upper', value: 300 },
];

const COLORS = ['#E66C37', '#12239E', '#118DFF'];

export default class IncomeDistribution extends PureComponent {

  render() {
    return (
      <PieChart width={450} height={200} onMouseEnter={this.onPieEnter}>
        <Legend verticalAlign="top" align="right" height={36} layout='vertical'/>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
