import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
// import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const marksArray = [
    { id: 1, name: "John", phy: 75, chem: 80, math: 85 },
    { id: 2, name: "Jane", phy: 90, chem: 85, math: 95 },
    { id: 3, name: "Bob", phy: 80, chem: 75, math: 90 },
    { id: 4, name: "Alice", phy: 85, chem: 90, math: 80 },
    { id: 5, name: "Mike", phy: 70, chem: 65, math: 75 },
    { id: 6, name: "Sara", phy: 95, chem: 85, math: 90 },
    { id: 7, name: "Dave", phy: 80, chem: 90, math: 95 },
    { id: 8, name: "Karen", phy: 75, chem: 80, math: 85 },
    { id: 9, name: "Tom", phy: 90, chem: 85, math: 95 },
    { id: 10, name: "Linda", phy: 80, chem: 75, math: 90 },
    { id: 11, name: "Peter", phy: 85, chem: 90, math: 80 },
    { id: 12, name: "Emily", phy: 70, chem: 65, math: 75 },
  ];

  return (
    <div>
      <LineChart width={1000} height={450} data={marksArray}>
        <Tooltip />
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" stroke="#8884d8" dataKey="phy"></Line>
        <Line type="monotone" stroke="#82ca9d" dataKey="chem"></Line>
      </LineChart>
    </div>
  );
};

export default Dashboard;
