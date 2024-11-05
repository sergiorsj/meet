import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

export default function PieChartComponent({events}) {
  const genres = ['React', "JavaScript", "Node", "Angular", "jQuery"]
  const [data, setData] = useState([]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#d5d5d5'];
useEffect(() => {
    setData(getData())
}, [events])

const getData = () => {
  const data =  genres.map((g)=> {
    const filterEvents = events.filter(
        (event) => event.summary.includes(g)
    )
    return {name: g, value: filterEvents.length}
})
return data;
}
  
    return (
      <ResponsiveContainer
      width="100%"
      height={400}
     >
      <PieChart>
       <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label={({ name, value }) => `${name}: ${value}`}
       >
        {data.map((entry, index) => (
         <Cell
          key={`cell-${index}`}
          fill={COLORS[index % COLORS.length]}
         />
        ))}
       </Pie>
       <Tooltip />
      </PieChart>
     </ResponsiveContainer>
    );
  }
