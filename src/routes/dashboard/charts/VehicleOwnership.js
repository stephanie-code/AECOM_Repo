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

export default class VehicleOwnership extends React.Component {
  render() {
    const data = [
      { name: "iOS", NoVehicle: 230, oneVehicle: 335, twoVehicle: 453, threeVehicle: 300, fourVehicle: 350, fiveOrMore: 230 }
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
            <Bar dataKey="NoVehicle" fill="#E66C37" stackId="a">
              <LabelList
                dataKey="NoVehicle"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="1Vehicle" fill="#12239E" stackId="a">
              <LabelList
                dataKey="1Vehicle"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="twoVehicle" fill="#76a8dd" stackId="a">
              <LabelList
                dataKey="twoVehicle"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="threeVehicle" fill="#41A4FF" stackId="a">
              <LabelList
                dataKey="threeVehicle"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="fourVehicle" fill="#0D6ABF" stackId="a">
              <LabelList
                dataKey="threeVehicle"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="fiveOrMore" fill="#12239E" stackId="a">
              <LabelList
                dataKey="threeVehicle"
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