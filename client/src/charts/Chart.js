// import "./styles.css";
import React from "react";
import { BarChart, Bar, Cell, ResponsiveContainer,CartesianGrid, XAxis, YAxis,Legend } from "recharts";


export default function App({result, current}) {

    const data = []
    for (let i = 0; i < result.length; i++) {
        data.push({name: i, elements: result[i]})
    }
    
    //Inline-style objects 
    const containerStyles = {
      width: "94vw",
      height: "400px",
      backgroundColor : "#f8f9fa",
      padding : "1rem",
      margin : "1rem auto",
      border : "1px solid lightgrey"
    }
  return (
      <div style={containerStyles}>
      <ResponsiveContainer width="100%" height={400}>
    <BarChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="elements" />
      <YAxis />
      <Legend />
      <Bar dataKey="elements" fill="#8884d8">
      {data.map((entry, index) => (
                <Cell fill={index === current ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
                // <Cell fill={index === current ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
              ))}
      </Bar>
    
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
