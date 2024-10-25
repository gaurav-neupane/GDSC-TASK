import React from "react";
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
  Rectangle,
} from "recharts";


const dataRadial = [
  { name: "Progress", value: 670 },
  { name: "Remaining", value: 3200 - 670 },
];

const COLORS1 = ["#3F72AF", " #d1d5db "];
const COLORS2 = ["#69a773", "#afc683", "#f3e3a0", "#edb16e", "#e57b54"];

const dataEntry = [
  {
    Running: 4000,
    Swimming: 2400,
    Workout: 2400,
    month: "Jan",
  },
  {
    Running: 3000,
    Swimming: 1398,
    Workout: 3000,
    month: "Feb",
  },
  {
    Running: 2000,
    Swimming: 9800,
    Workout: 6000,
    month: "Mar",
  },
  {
    Running: 2780,
    Swimming: 3908,
    Workout: 4500,
    month: "Apr",
  },
  {
    Running: 1890,
    Swimming: 4800,
    Workout: 8650,
    month: "Jun",
  },
  {
    Running: 2390,
    Swimming: 3800,
    Workout: 9000,
    month: "Jul",
  },
  {
    Running: 3490,
    Swimming: 4300,
    Workout: 4000,
    month: "Aug",
  },
];

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
];

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const Metric = ({ title, value }) => (
  <div className="bg-gray-800 p-4 rounded-lg">
    <h3 className="text-sm font-medium text-gray-100">{title}</h3>
    <p className="text-2xl font-bold text-white">{value}</p>
  </div>
);

export default function Component() {
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
              <Legend layout="vertical" verticalAlign="top" align="right" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="lg:col-span-3 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Heart Rate</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="value" stroke="#4ade80" />
              <XAxis/>
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
              data={data}
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
              <XAxis dataKey="name" />
              <YAxis />
              <Legend />
              <Bar dataKey="value" fill="url(#colorBar)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Additional Metrics */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Progress</h2>
          <Metric title="Stamina" value="32%" />
          <Metric title="Strength" value="20%" />
          <Metric title="Endurance" value="15%" />
          <Metric title="Flexibility" value="10%" />
          <Metric title="Immunity" value="18%" />
        </div>
      </div>
    </div>
  );
}
