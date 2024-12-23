import React, { useState, useEffect } from "react";
import { Flame, Timer, MoonStar } from "lucide-react";
import { IoWaterOutline } from "react-icons/io5";
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

import {
  data,
  Data,
  Data2,
  dataEntry,
  dataEntry2,
  dataEntry3,
  dataRadial,
  COLORS1,
  COLORS2,
} from "./ChartData";

const Metric = ({ title, value, icon }) => (
  <div className="flex flex-col justify-center items-center bg-gray-800 p-4 rounded-lg">
    <span className="mb-4 text-gray-400">{icon}</span>
    <h3 className="text-sm font-medium text-gray-100">{title}</h3>
    <p className="text-2xl font-bold text-white">{value}</p>
  </div>
);

const socket = io("https://data.gdscnsut.com");

export default function Component() {
  const [rateData, setRateData] = useState([]);
  const [dataMain, setDataMain] = useState(dataEntry);
  const [dataBar, setBarData] = useState(Data);

  const handleDataChangeMain = (e) => {
    e.preventDefault();
    if (e.target.value === "today") {
      setDataMain(dataEntry3);
    } else if (e.target.value === "week") {
      setDataMain(dataEntry2);
    } else {
      setDataMain(dataEntry);
    }
  };

  const handleDataChangeBar = (e) => {
    e.preventDefault();
    if (e.target.value === "week") {
      setBarData(Data2);
    } else {
      setBarData(Data);
    }
  };

  useEffect(() => {
    socket.on("random_number", (data) => {
      setRateData((currentrateData) =>
        currentrateData.length > 30
          ? [
              ...currentrateData.slice(1),
              {
                name: "time",
                rate: data.number + (Math.random() * (180 - 50) + 50),
              },
            ]
          : [
              ...currentrateData,
              {
                name: "time",
                rate: data.number + (Math.random() * (180 - 50) + 50),
              },
            ]
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg relative">
          <h2 className="text-xl font-bold mb-4">Activity</h2>
          <div className="absolute top-4 left-3/4">
            <select
              name="selectedFruit"
              className="bg-gray-800 p-1 border-2 hover:border-green-300 rounded-md focus:outline-none"
              onChange={handleDataChangeMain}
            >
              <option value="month">This Month</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300} className="relative">
            <AreaChart
              data={dataMain}
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
              <XAxis dataKey="value" />
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
          <Metric
            title="Energy Burn"
            value="1,234"
            icon={<Flame className="h-8 w-8" />}
          />
          <Metric
            title="Time"
            value="40m 35s"
            icon={<Timer className="h-8 w-8" />}
          />
          <Metric
            title="Water Intake"
            value="2.3%"
            icon={<IoWaterOutline className="h-8 w-8" />}
          />
          <Metric
            title="Sleep"
            value="60m 45s"
            icon={<MoonStar className="h-8 w-8" />}
          />
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
                    stroke="none"
                    data={dataRadial}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
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
                <span className="text-4xl font-bold">1100</span>
                <span className="text-xl font-medium">/ 3200</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Calories Composition</h2>
          <ResponsiveContainer width="100%" height={200} className="mt-10">
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
              <Tooltip />
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
        <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg relative">
          <h2 className="text-xl font-bold mb-4">Fitness Score</h2>
          <div className="absolute top-4 left-3/4">
            <select
              name="selectedFruit"
              className="bg-gray-800 p-1 border-2 hover:border-green-300 rounded-md focus:outline-none"
              onChange={handleDataChangeBar}
            >
              <option value="month">This Month</option>
              <option value="week">This Week</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={dataBar}
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
              <XAxis dataKey="value" />
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
