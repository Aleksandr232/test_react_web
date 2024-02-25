import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import Data from '../data/data.json';


const SimpleLineComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
        setData(Data);
  }, [])

  return (
    <div>
        <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="sku" stroke="green" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="summed" stroke="#7884d8" />
                <Line type="monotone" dataKey="recipe" stroke="red" />
            <Tooltip />
            <Legend />
        </LineChart>
    </div>
  );
};

export default SimpleLineComponent;