import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";


import {data , Data , dataEntry , dataRadial , COLORS1 , COLORS2} from "./ChartData"

const Metric = ({ title, value }) => (
  <div className="bg-gray-800 p-4 rounded-lg">
    <h3 className="text-sm font-medium text-gray-100">{title}</h3>
    <p className="text-2xl font-bold text-white">{value}</p>
  </div>
);

const socket = io("https://data.gdscnsut.com");

export default function Component() {
  const [rateData, setRateData] = useState([]);

  useEffect(() => {
    socket.on("random_number", (data) => {
      setRateData((currentrateData) => [
        ...currentrateData,
        {
          name: "time",
          rate: data.number * (100 - 40) + 40,
        },
      ]);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={dataEntry}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRun" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSwim" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorWork" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3282B8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3282B8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="Running"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorRun)"
              />
              <Area
                type="monotone"
                dataKey="Swimming"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorSwim)"
              />
              <Area
                type="monotone"
                dataKey="Workout"
                stroke="#3282B8"
                fillOpacity={1}
                fill="url(#colorWork)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <Metric title="Energy Burn" value="1,234" />
          <Metric title="Time" value="40m 35s" />
          <Metric title="Water Intake" value="2.3%" />
          <Metric title="Sleep" value="60m 45s" />
        </div>

        {/* List Section */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Diet Plan</h2>
          <ul className="space-y-2">
            <li>Banana Shake - 980 kcal</li>
            <li>Moong Dal Pancake - 680 kcal</li>
            <li>Paneer Sandwich - 470 kcal</li>
            <li>Oats - 560 kcal</li>
            <li>Chicken Rice - 480 kcal</li>
            <li>Fruit Salad - 280 kcal</li>
            <li>Cold Drink - 1018 kcal</li>
          </ul>
        </div>

        {/* Pie Charts */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Calory Intake (kcal)</h2>
          <div className="w-64 h-64 bg-card rounded-lg shadow-lg flex items-center justify-center">
            <div className="relative w-64 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataRadial}
                    cx="50%"
                    cy="50%"
                    innerRadius={56}
                    outerRadius={70}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS1[index % COLORS1.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-foreground">670</span>
                <span className="text-xl font-medium text-muted-foreground">
                  / 3200
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Calories Composition</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS2[index % COLORS2.length]}
                  />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                verticalAlign="top"
                align="left"
                wrapperStyle={{
                  paddingLeft: "10px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="lg:col-span-3 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Heart Rate</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={rateData}>
              <Line type="monotone" dataKey="rate" stroke="#4ade80" />
              <XAxis />
              <YAxis />
              <Legend />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Fitness Score</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={Data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fb923c" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#fb923c" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <Legend />
              <Bar dataKey="Score" fill="url(#colorBar)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Additional Metrics */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Progress</h2>
          <Metric title="Stamina" value="32%" />
          <Metric title="Strength" value="20%" />
          <Metric title="Endurance" value="15%" />
        </div>
      </div>
    </div>
  );
}
