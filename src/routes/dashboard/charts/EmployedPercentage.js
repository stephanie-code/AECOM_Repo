import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label,
  LabelList,
  Legend
} from "recharts";

const renderCustomizedLabel = (props) => {
  const { content, ...rest } = props;

  return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
};

export default class EmployedPercentage extends React.Component {
  render() {
    const data = [
      { name: "iOS", unemployed: 230, employed: 335 }
    ];

    return (
      <div className="content c-white">
        <ResponsiveContainer height={100} width={"100%"}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ left: 50, right: 50 }}
            stackOffset="expand"
          >
            <XAxis hide type="number" />
            <YAxis
              hide
              type="category"
              dataKey="name"
              stroke="#FFFFFF"
              fontSize="12"
            />
            <Legend verticalAlign="top" align="left" height={36}/>
            <Tooltip />
            <Bar dataKey="unemployed" fill="#E66C37" stackId="a">
              <LabelList
                dataKey="unemployed"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="employed" fill="#118DFF" stackId="a">
              <LabelList
                dataKey="employed"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}