// import "./styles.css";
import React from "react";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";


export default function App({result, current}) {

    const data = []
    for (let i = 0; i < result.length; i++) {
        data.push({name: i, uv: result[i]})
    }
    
    //Inline-style objects 
    const containerStyles = {
      width: "94vw",
      height: "400px",
      backgroundColor : "#f8f9fa",
      padding : "1rem",
      margin : "1rem auto"
    }
  return (
      <div style={containerStyles}>
      <ResponsiveContainer width="100%" height={400}>
    <BarChart width={800} height={400} data={data}>
      <Bar dataKey="uv" fill="#8884d8">
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
