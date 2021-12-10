import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label,
  LabelList
} from "recharts";

const renderCustomizedLabel = (props) => {
  const { content, ...rest } = props;

  return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
};

export default class SentimentChart extends React.Component {
	render() {
	  const data = [
		{ name: "iOS", positive: 230, negative: 335, neutral: 453, mixed: 300 }
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
              type="category"
              dataKey="name"
              stroke="#FFFFFF"
              fontSize="12"
            />
            <Tooltip />
			<Bar dataKey="negative" fill="#dd7876" stackId="a">
              <LabelList
                dataKey="negative"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="positive" fill="#82ba7f" stackId="a">
              <LabelList
                dataKey="positive"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="neutral" fill="#76a8dd" stackId="a">
              <LabelList
                dataKey="neutral"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="mixed" fill="#4aa8de" stackId="a">
              <LabelList
                dataKey="mixed"
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