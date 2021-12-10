import React from "react";
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

// Sample chart data
const pdata = [
    {
        name: 'MongoDb',
        fees: 190,
        girls: 100,
        boys: 120
    },
    {
        name: 'Javascript',
        fees: 150,
        girls: 110,
        boys: 122,
    },
    {
        name: 'PHP',
        fees: 180,
        girls: 112,
        boys: 100
    },
    {
        name: 'Java',
        fees: 130,
        girls: 110,
        boys: 121,
    },
    {
        name: 'C#',
        fees: 120,
        girls: 160,
        boys: 174
    },
    {
        name: 'C++',
        fees: 150,
        girls: 140,
        boys: 184
    },
];

const ModesOfTransportation = () => {
    return (
        <>
            <ResponsiveContainer width="100%" aspect={2.2}>
                <LineChart data={pdata} height={500} >
                    <CartesianGrid />
                    <XAxis dataKey="name"
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend verticalAlign="top" align="left" height={36} />    
                    <Tooltip />
                    <Line dataKey="fees" stroke="white" activeDot={{ r: 8 }} />
                    <Line dataKey="boys" stroke="red" activeDot={{ r: 8 }} />
                    <Line dataKey="girls" stroke="yellow" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default ModesOfTransportation;
