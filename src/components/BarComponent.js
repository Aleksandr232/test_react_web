import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import Data from '../data/data.json';


const BarComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
        setData(Data);
  }, [])

  return (
    <div>
        <BarChart width={1000} height={300} data={data}>
            <XAxis dataKey="name" />
                <YAxis />
            <Bar dataKey="sku" fill="red" />
            <Tooltip />
            <Legend />
        </BarChart>
    </div>
  );
};

export default BarComponent;