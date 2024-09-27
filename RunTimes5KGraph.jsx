import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
  { date: '2020-03-07', townsmoor: 33.4 },
  { date: '2021-07-24', townsmoor: 30.27 },
  { date: '2021-09-04', townsmoor: 27.6 },
  { date: '2021-09-18', townsmoor: 28.12 },
  { date: '2022-01-22', townsmoor: 28.35 },
  { date: '2022-01-29', townsmoor: 31.05 },
  { date: '2022-02-12', townsmoor: 27.08 },
  { date: '2022-02-19', townsmoor: 26.65 },
  { date: '2022-03-05', townsmoor: 26.97 },
  { date: '2022-03-12', townsmoor: 26.15 },
  { date: '2022-03-26', townsmoor: 26.15 },
  { date: '2022-04-16', townsmoor: 26.83 },
  { date: '2022-05-07', townsmoor: 24.35 },
  { date: '2022-05-21', townsmoor: 24.78 },
  { date: '2022-05-28', leazes: 25.15 },
  { date: '2022-06-06', townsmoor: 24.88 },
  { date: '2022-06-23', leazes: 25.35 },
  { date: '2022-08-06', townsmoor: 24.88 },
  { date: '2022-09-17', townsmoor: 25.73 },
  { date: '2022-10-07', greatNorth: 23.55, sevillaBF: 25.92 },
  { date: '2023-03-18', townsmoor: 26.2 },
  { date: '2023-04-29', townsmoor: 26.25 },
  { date: '2023-05-06', townsmoor: 24.55 },
  { date: '2023-06-03', leazes: 25.38 },
  { date: '2023-06-10', leazes: 24.32 },
  { date: '2023-09-30', townsmoor: 25.62 },
  { date: '2024-03-23', leazes: 25.43 },
  { date: '2024-03-30', leazes: 23.65 },
  { date: '2024-04-13', townsmoor: 24.27 },
  { date: '2024-04-20', townsmoor: 23.18 },
];

const RunTimesGraph = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">5K Run Times Progress</h2>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis 
            dataKey="date" 
            tick={{ fill: '#333', fontSize: 12 }}
            tickFormatter={(tick) => new Date(tick).toLocaleDateString('en-GB', { year: '2-digit', month: 'short' })}
          >
            <Label value="Date" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis 
            domain={['dataMin - 1', 'dataMax + 1']} 
            tick={{ fill: '#333', fontSize: 12 }}
          >
            <Label value="Time (minutes)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
          </YAxis>
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px' }}
            formatter={(value) => [`${value.toFixed(2)} min`, undefined]}
          />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="townsmoor" stroke="#8884d8" name="Townsmoor" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="leazes" stroke="#82ca9d" name="Leazes" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="greatNorth" stroke="#ffc658" name="Great North 5K" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sevillaBF" stroke="#ff7300" name="Sevilla BF 5K" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RunTimesGraph;
